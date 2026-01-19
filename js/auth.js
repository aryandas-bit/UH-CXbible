// Authentication logic for CX Bible
import { auth, provider, signInWithPopup, signOut, onAuthStateChanged } from './firebase.js';

console.log('Auth module loaded');

class AuthManager {
    constructor() {
        this.overlay = null;
        this.isAuthenticated = false;
        this.currentUser = null;
        this.init();
    }

    init() {
        // Wait for Firebase to be initialized
        this.waitForFirebase().then(() => {
            this.createOverlay();
            this.setupAuthStateListener();
            this.checkInitialAuthState();
        });
    }

    async waitForFirebase() {
        return new Promise((resolve) => {
            const checkFirebase = () => {
                if (window.firebaseAuth && window.firebaseProvider) {
                    resolve();
                } else {
                    setTimeout(checkFirebase, 100);
                }
            };
            checkFirebase();
        });
    }

    createOverlay() {
        // Get overlay element from HTML
        this.overlay = document.getElementById('auth-overlay');
        console.log('Overlay element found:', this.overlay);

        // Setup sign-in button
        const signInBtn = document.getElementById('google-signin-btn');
        console.log('Sign-in button found:', signInBtn);
        if (signInBtn) {
            signInBtn.addEventListener('click', (e) => {
                console.log('Sign-in button clicked');
                this.signInWithGoogle();
            });
        } else {
            console.error('Sign-in button not found!');
        }
    }

    async signInWithGoogle() {
        try {
            console.log('Starting Google sign-in...');
            const result = await signInWithPopup(window.firebaseAuth, window.firebaseProvider);
            this.currentUser = result.user;
            console.log('User signed in:', this.currentUser.email);
            console.log('Sign-in successful!');
        } catch (error) {
            console.error('Sign-in error:', error);
            alert('Sign-in failed. Please try again. Error: ' + error.message);
        }
    }

    setupAuthStateListener() {
        onAuthStateChanged(window.firebaseAuth, (user) => {
            if (user) {
                this.isAuthenticated = true;
                this.currentUser = user;
                this.hideOverlay();
                console.log('User authenticated:', user.email);
            } else {
                this.isAuthenticated = false;
                this.currentUser = null;
                this.showOverlay();
                console.log('User not authenticated');
            }
        });
    }

    checkInitialAuthState() {
        // Check if user is already signed in on page load
        const user = window.firebaseAuth.currentUser;
        if (user) {
            this.isAuthenticated = true;
            this.currentUser = user;
            this.hideOverlay();
        } else {
            this.showOverlay();
        }
    }

    showOverlay() {
        if (this.overlay) {
            this.overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    }

    hideOverlay() {
        if (this.overlay) {
            this.overlay.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }
    }

    async signOutUser() {
        try {
            await signOut(window.firebaseAuth);
            console.log('User signed out');
        } catch (error) {
            console.error('Sign-out error:', error);
        }
    }

    getCurrentUser() {
        return this.currentUser;
    }

    isUserAuthenticated() {
        return this.isAuthenticated;
    }
}

// Initialize auth manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.authManager = new AuthManager();
});
