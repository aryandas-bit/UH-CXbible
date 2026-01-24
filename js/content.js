// CodeX Content Data
const contentData = {
    'blood-vision': {
        title: 'Blood Vision Documentation',
        content: `
            <div class="bv-subtabs" role="tablist" aria-label="Blood Vision Overview and SOPs">
                <button type="button" class="bv-subtab active" data-target="bv-overview" aria-selected="true">Overview</button>
                <button type="button" class="bv-subtab" data-target="bv-region" aria-selected="false">Region Based SOPs</button>
                <button type="button" class="bv-subtab" data-target="bv-refunds" aria-selected="false">Refunds</button>
            </div>

            <div class="bv-pane active" id="bv-overview">
                <h3>Blood Vision Overview</h3>
                <p>Blood Vision by Ultrahuman introduces a new approach to preventive blood testing through its UltraTraceâ„¢ technology. This advancement is not just another blood test; it marks a significant step forward in health and wellness monitoring.</p>
                <p>UltraTraceâ„¢ technology innovatively links changes in sleep patterns, resting heart rate, heart rate variability, and physical activity with key blood markers, based on decades of comprehensive research.</p>
                <p>For instance, UltraTraceâ„¢ can analyze the impact of improved sleep quality on a blood marker such as LDL, giving users a probability score. This functionality provides a clearer understanding of how lifestyle habits directly influence blood markers.</p>
                <p>By enabling users to track their health markers over time, Blood Vision provides personalized insights through advanced algorithms. This approach prioritizes longevity and proactive well-being, marking a departure from traditional disease-centric metrics and emphasizing preventive healthcare.</p>

                <div class="bv-visuals" aria-label="Blood Vision visuals">
                    <figure>
                        <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXf8MOhmfiroJskah-VSe_r9W6drNayfVUO8e1q8PH4MJBgUeBCUijj-8C7HHbMZ-kpsnSt-riMvRvh_HjN9MAEe1xT7jyTIi9QEtbZ2e8PxTreuM08B2RppdAtMv0Da6Xx2XIOcYg?key=ubek2f9gjtdQGabUL4ElvQ" alt="Blood Vision dashboard and cholesterol insights on mobile" loading="lazy">
                        <figcaption>Blood Vision dashboards: biomarker ranges, correlations, lifestyle markers, and supplement guidance.</figcaption>
                    </figure>
                </div>

                <h3>How secure is my Blood Vision data?</h3>
                <h4>Your Data, Your Rules</h4>
                <p><strong>1. We never sell your data â€” period.</strong><br>
                Your trust means everything to us. Thatâ€™s why we will never sell your personal information, including blood or genetic data, to third parties for advertising or commercial gain.</p>
                <p><strong>2. HIPAA-compliant protection</strong><br>
                Although Ultrahuman operates globally, our blood testing service is run through a US-based entity that complies with <strong>HIPAA</strong> â€” the gold standard for protecting your health data in the United States.</p>
                <p><strong>3. Youâ€™re in control</strong><br>
                Your data belongs to you. You can access it, download it, or ask us to delete it at any time. We believe in full transparency and complete user control.</p>

                <h3>Lab quality & transparency</h3>
                <p>When it comes to blood testing, trust starts with transparency. At Ultrahuman, we donâ€™t just focus on cutting-edge insights â€” we ensure that the lab work behind those insights meets the highest standards of quality, reliability, and clinical rigor.</p>

                <h4>Trusted Lab Partners, Globally Recognized</h4>
                <ul>
                    <li><strong>In the United States</strong>, all tests are processed by <strong>Quest Diagnostics</strong>, one of the largest and most respected diagnostic labs in the country. Quest operates under <strong>CLIA certification</strong> and adheres to <strong>CAP</strong> standards, ensuring strict quality control and reliable turnaround times. Whether you choose at-home collection or visit a local Quest lab, you can expect clinical-grade accuracy with end-to-end tracking.</li>
                    <li><strong>In India</strong>, testing is handled by <strong>Tata1MG</strong>, a NABL-accredited lab network with a reputation for speed, reliability, and precision. Samples are collected and processed under stringent cold-chain logistics and laboratory best practices. Every phlebotomist is trained, certified, and monitored to ensure safe, sterile, and seamless collection â€” often within hours of booking.</li>
                </ul>

                <h4>Why We Chose These Labs</h4>
                <ul>
                    <li><strong>Accreditation &amp; compliance:</strong> Only labs that meet or exceed national regulatory standards are considered.</li>
                    <li><strong>Sample integrity &amp; logistics:</strong> From vein to vial to lab bench â€” every step is monitored.</li>
                    <li><strong>Turnaround time:</strong> Fast partial reporting, with final results delivered promptly â€” without cutting corners.</li>
                    <li><strong>Tech stack integration:</strong> Smooth API-based reporting feeds directly into the Ultrahuman app.</li>
                    <li><strong>Scalability:</strong> Built to support single tests or longitudinal biomarker tracking.</li>
                </ul>

                <h4>Zero Tolerance for Compromise</h4>
                <p>We donâ€™t operate our own lab â€” and thatâ€™s intentional. We integrate best-in-class lab infrastructure with our proprietary UltraTraceâ„¢ algorithm and personalized insights. This separation ensures that each part of the process â€” from collection to analysis to interpretation â€” is optimized by experts. If something falls short (missed sample, delayed report, or unprofessional experience), we take ownership and resolve it directly with the lab. We maintain strict SLAs and continually monitor performance.</p>

                <h4>Always Transparent, Always Accountable</h4>
                <p>You can view full details of where your test is processed â€” and even the lab ID and timestamp â€” inside the Ultrahuman app. Your data is fully protected: in the US, operations are <strong>HIPAA-compliant</strong>. In India, we follow <strong>ISO and NABL protocols</strong>. Across all regions, we never sell or share your data without explicit consent.</p>

                <h3>Why blood markers matter</h3>
                <p>Blood markers, or biomarkers, are essential indicators in your blood that offer insights into your health. They come in various forms, such as cells, enzymes, hormones, or molecules, each shedding light on your health status, signaling potential diseases, or tracking the effectiveness of treatments. Doctors rely on them much like blood pressure or cholesterol checks to spot issues before symptoms appear.</p>
                <p>Our bodies are a complex network of systems, including the cardiovascular, metabolic, and immune systems. During a health check-up, doctors assess markers such as heart rate, blood pressure, cholesterol, blood sugar, and weight to identify risk factors for serious conditions and enable early action.</p>

                <h4>Warning signs</h4>
                <p>Blood markers are critical early warning signs, alerting you to underlying issues before they escalate. They span proteins, lipids, cells, and small molecules, each providing insight into how your body is functioning. They help you understand your body, pinpoint areas for improvement, track progress, and identify issues that may hinder performance.</p>

                <ul>
                    <li><strong>Identifying Health Issues:</strong> Many markers link directly to conditions (e.g., elevated troponin for heart damage; high ALT/AST for liver stress). Early detection lets you act before lasting damage.</li>
                    <li><strong>Monitoring Progress:</strong> Tracking HDL (â€œgoodâ€) and LDL (â€œbadâ€) cholesterol is vital for cardiovascular risk; ongoing checks show how treatments or lifestyle changes are working.</li>
                </ul>

                <h4>Why take a Blood Vision test</h4>
                <p>Understanding markers like LDL is a forward-looking strategy for longevity. Early insights help you anticipate risks, adjust lifestyle and diet, and take proactive steps so your healthspan matches your lifespan.</p>

                <ul>
                    <li><strong>Predicting Future Risks:</strong> Use markers to anticipate challenges and act early.</li>
                    <li><strong>Understanding Organ Function:</strong> Markers such as TSH and thyroxine highlight thyroid function and metabolic impact, enabling timely interventions.</li>
                </ul>

                <p>Keeping track of these markers over time paints a detailed picture of your health trends. Continuous insight empowers informed decisions on lifestyle, diet, and healthcare, keeping you proactive about your well-being.</p>
            </div>

                        <div class="bv-pane" id="bv-region" hidden>
                <div class="bv-region-bar">
                    <button type="button" class="bv-region-back" data-region-back aria-label="Back">
                        <span aria-hidden="true">←</span>
                    </button>
                    <div class="bv-pill-tabs bv-region-tabs" role="tablist" aria-label="Region Based SOPs">
                    <button type="button" class="bv-pill-button active" data-region-target="bv-india" aria-selected="true">India</button>
                    <button type="button" class="bv-pill-button" data-region-target="bv-uae" aria-selected="false">UAE</button>
                    <button type="button" class="bv-pill-button" data-region-target="bv-usa" aria-selected="false">USA</button>
                </div>
                </div>

                                <div class="bv-region-pane active" id="bv-india">
                    <h3>Blood Vision (India)</h3>
                    <p><strong>Support Level:</strong> L2</p>
                    <p><strong>Applicable Regions:</strong> India</p>

                    <h4>Related Tags</h4>
                    <ul>
                        <li><code>BV_Refund</code> - Refund cases</li>
                        <li><code>BV_Report</code> - Report discrepancies in the PDF or app</li>
                        <li><code>BV_Reschedule</code> - Reschedule requests</li>
                        <li><code>BV_ETA</code> - ETA for reports</li>
                        <li><code>BV_FAQ</code> - General Blood Vision questions</li>
                        <li><code>BV_readings_deep_dive</code> - Queries about BV data</li>
                    </ul>

                    <h4>Overview</h4>
                    <p>Our two partners in India are <strong>Orange Health</strong> and <strong>TATA 1MG</strong>.</p>
                    <p>Identify orders on <a href="https://ops.ultrahuman.com/admin/blood_test_purchases" target="_blank" rel="noopener noreferrer">Blood Test Purchases</a> by searching for the purchase email ID. Flag any app/booking issues in <a href="https://ultrahumanworkspace.slack.com/archives/C02DUT8HSHF" target="_blank" rel="noopener noreferrer">#support-tech-oncall-requests</a> and tag Gaurav Bhatia. For last-minute reschedules, highlight to an SME/Lead so we can coordinate with TATA 1MG on WhatsApp.</p>
                    <ul>
                        <li>Blood Vision now covers ~60 cities across ~2000 PIN codes. To check serviceability: Ultrahuman app &gt; Vision tab &gt; Book Now &gt; Add address.</li>
                        <li>All BV orders are under Blood Test Purchases. Order IDs start with UHB or PO1.</li>
                        <li>Partial reports (Orange Health) can be downloaded from their dashboard.</li>
                        <li>When flagging on WhatsApp, share the request number (prefix MUM/BLR/DEL/etc. for Orange Health; city code for TATA 1MG).</li>
                        <li>A PDF of the final report is emailed once all reports are ready.</li>
                        <li>Flag ETA/reschedule cases on the WhatsApp group; tech issues on <a href="https://ultrahumanworkspace.slack.com/archives/C069YK98D16" target="_blank" rel="noopener noreferrer">#orangehealth-ultrahuman-support</a>.</li>
                    </ul>

                    <h4>Common Queries / Cases</h4>
                    <ol>
                        <li>
                            <strong>Location not serviceable</strong><br>
                            To check serviceability: Ultrahuman app &gt; Vision tab &gt; Book Now &gt; Add address.<br>
                            <em>Tag:</em> <code>BV_FAQ</code>
                        </li>
                        <li>
                            <strong>Missing/incomplete parameters</strong><br>
                            Check the dashboard to verify completion time. Full markers expected within 21 days; escalate delays to <a href="https://ultrahumanworkspace.slack.com/archives/C069YK98D16" target="_blank" rel="noopener noreferrer">#orangehealth-ultrahuman-support</a> (tag Harsh R, Omprakash Sahu). TAT for 1MG: <a href="https://docs.google.com/spreadsheets/d/1Dq536hwMpig-QJ9bqUi8eo1cjTBMIkLTdtQcFPnKh30/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer">link</a>.<br>
                            <em>Tag:</em> <code>BV_ETA</code>
                        </li>
                        <li>
                            <strong>Reschedule request</strong><br>
                            Guide: Ultrahuman app &gt; Profile &gt; Blood Vision &gt; Test &gt; Reschedule.<br>
                            <em>Tag:</em> <code>BV_Reschedule</code>
                        </li>
                        <li>
                            <strong>Pending markers in app but present in email PDF</strong><br>
                            Flag in <a href="https://ultrahumanworkspace.slack.com/archives/C02DUT8HSHF" target="_blank" rel="noopener noreferrer">#support-tech-oncall-requests</a>, tag tech-oncall.<br>
                            <em>Tag:</em> <code>BV_Report</code>
                        </li>
                        <li>
                            <strong>Parameter discrepancy (PDF vs app)</strong><br>
                            Tag tech-oncall in <a href="https://ultrahumanworkspace.slack.com/archives/C02DUT8HSHF" target="_blank" rel="noopener noreferrer">#support-tech-oncall-requests</a>.<br>
                            <em>Tag:</em> <code>BV_Report</code>
                        </li>
                        <li>
                            <strong>User wants insights on parameters</strong><br>
                            Ask them to check with their doctors. For dietary suggestions connect them to Coaches or UH app &gt; Profile &gt; Connect with Performance coaches.<br>
                            <em>Tag:</em> <code>BV_readings_deep_dive</code>
                        </li>
                        <li>
                            <strong>Booked test from different ID than UH login</strong><br>
                            Flag tech-oncall in <a href="https://ultrahumanworkspace.slack.com/archives/C02DUT8HSHF" target="_blank" rel="noopener noreferrer">#support-tech-oncall-requests</a>.<br>
                            <em>Tag:</em> <code>BV_Report</code>
                        </li>
                        <li>
                            <strong>Payment captured but order not confirmed</strong><br>
                            In Blood Test Purchases check Order Status and Accepted by Vendor. Verify payment (RazorPay). If payment is captured, flag <a href="https://ultrahumanworkspace.slack.com/archives/C02DUT8HSHF" target="_blank" rel="noopener noreferrer">#support-tech-oncall-requests</a> to confirm refund/reinitiation. Reference: <a href="https://ultrahumanworkspace.slack.com/archives/C02DUT8HSHF/p1759516949970919" target="_blank" rel="noopener noreferrer">thread</a>.<br>
                            <em>Tag:</em> <code>BV_Refund</code>
                        </li>
                    </ol>
                </div>
<div class="bv-region-pane" id="bv-uae" hidden>
                    <h3>Blood Vision Pilot (UAE)</h3>
                    <p>Blood Vision is now live in all seven emirates of the UAE. We offer at-home collection for an 80+ biomarker test.</p>

                    <h4>Quick Facts</h4>
                    <table>
                        <tr><td><strong>Coverage</strong></td><td>All seven emirates across the UAE.</td></tr>
                        <tr><td><strong>Partner</strong></td><td>Valeo.</td></tr>
                        <tr><td><strong>Collection</strong></td><td>At-home collection only; no clinic draws.</td></tr>
                        <tr><td><strong>Subscription Flow</strong></td><td>None.</td></tr>
                        <tr><td><strong>Order Status Dashboard</strong></td><td>No internal dash for checking order status.</td></tr>
                    </table>

                    <div class="bv-visuals" aria-label="Blood test purchase details">
                        <figure>
                            <img src="image%20(9).png" alt="Blood test purchase details showing purchase ID, request ID, status, failure reason, partner, lab, testing modality, and partner token." loading="lazy">
                            <figcaption>Blood test purchase details view (request ID reference for Valeo WhatsApp group).</figcaption>
                        </figure>
                    </div>

                    <h4>Related Tags</h4>
                    <ul>
                        <li><code>BV_Refund</code> - Refund cases.</li>
                        <li><code>BV_Report</code> - Report-related discrepancies in the PDF report or the app.</li>
                        <li><code>BV_Reschedule</code> - Reschedule blood test appointment to another date.</li>
                        <li><code>BV_ETA</code> - ETA for reports.</li>
                        <li><code>BV_FAQ</code> - Queries for what is BV.</li>
                        <li><code>BV_readings_deep_dive</code> - Queries about BV data.</li>
                    </ul>

                    <h4>WhatsApp Support Group</h4>
                    <p>Support group is on WhatsApp - Ultrahuman and Valeo.</p>
                    <p>Join the Ultrahuman x Valeo WhatsApp Support Group: <a href="https://chat.whatsapp.com/H1zrVI5IxRZCJZ26j5XiYA" target="_blank" rel="noopener noreferrer">https://chat.whatsapp.com/H1zrVI5IxRZCJZ26j5XiYA</a></p>
                    <p>For all cases flagged on the Valeo WhatsApp group, take the numeric request number (for example, 99508) as the reference and share it with them.</p>

                    <h4>Availability</h4>
                    <p>The UAE program is currently live across all seven emirates, including Dubai, Abu Dhabi, and Sharjah. Collections are executed through our Valeo partnership.</p>
                    <p>Slots are surfaced in the Ultrahuman app within the Vision tab. If a user cannot see slots, capture their PIN and escalate to the BV ops group for manual scheduling.</p>

                    <h4>Packages</h4>
                    <p>The UAE beta mirrors the India Foundational and Advanced panels with localized ranges. Hormone and Menstrual panels are coming soon and should not be promised until communicated.</p>

                    <h4>Logistics</h4>
                    <ul>
                        <li>Collections are at-home with mobile phlebotomists who travel in marked cars.</li>
                        <li>Users receive WhatsApp coordination 12 hours before pickup.</li>
                        <li>Phlebotomists carry bilingual consent and aftercare leaflets; remind users to request Arabic if required.</li>
                    </ul>

                    <h4>Escalations</h4>
                    <p>Escalate to <code>#blood-vision-uae-ops</code> with the order ID for:</p>
                    <ul>
                        <li>Address changes inside 24 hours of slot start.</li>
                        <li>Requests for clinic draws instead of home visits (currently not supported).</li>
                        <li>Re-collections or sample integrity concerns.</li>
                    </ul>

                    <h4>Reporting</h4>
                    <p>Partial reports take up to 48 hours, and final panels can take 4 business days due to cross-border lab review. Communicate the longer turnaround and log user expectations in the CRM.</p>
</div>

<div class="bv-region-pane" id="bv-usa" hidden>
    <h3>Blood Vision (USA)</h3>
    <p><strong>Support Level:</strong> L2</p>
    <p><strong>Applicable Regions:</strong> USA</p>
    <p>USA SOP details will be added here.</p>
</div>
            </div>
<div class="bv-pane" id="bv-refunds" hidden>
                <h3>Blood Vision Refunds</h3>
                <p><strong>Applicable Regions:</strong> India, US, UAE</p>
                <p><strong>Related Tags:</strong> <code>BV_Refund</code></p>

                <h4>Refund/Cancellation Process for Blood Vision India, UAE</h4>
                <ul>
                    <li>Ask folks with Payment Gateway access to refund the user via Razorpay.</li>
                    <li>Fill up the <a href="https://docs.google.com/spreadsheets/d/1fVk9L41Nb91jDXG_-hORqlss2iJkjH5fTfbnB_KAO1c/edit?gid=403303823#gid=403303823" target="_blank" rel="noopener noreferrer">refund sheet</a>.</li>
                </ul>

                <h4>Refund/Cancellation Process for Blood Vision US</h4>
                <p>For US users, please check with an SME/Lead.</p>
                <ul>
                    <li>Refunds will be processed on Stripe USA.</li>
                    <li>Fill up the <a href="https://docs.google.com/spreadsheets/d/1fVk9L41Nb91jDXG_-hORqlss2iJkjH5fTfbnB_KAO1c/edit?gid=403303823#gid=403303823" target="_blank" rel="noopener noreferrer">refund sheet</a>.</li>
                </ul>
            </div>
        `
    },
    'm1-sensor': {
        title: 'M1 Sensor Documentation',
        content: `
            <h3>Ultrahuman M1 Overview</h3>
            <p>The Ultrahuman M1 is a wearable glucose monitoring system designed to help users optimize their metabolic health. It works by continuously measuring glucose levels from the interstitial fluid using a CGM sensor.</p>

            <h4>How It Works</h4>
            <p>The device uses a tiny filament inserted just under the skin (painlessly, for most people). It tracks your glucose levels 24/7, updating every few minutes. You scan the sensor with your phone to retrieve the data.</p>

            <h4>Types Of Sensors & Regions</h4>
            <table>
                <tr><th>Region</th><th>Sensor Type</th><th>Scan Needed?</th><th>Live Updates?</th></tr>
                <tr><td>India</td><td>Libre 1 & Libre Pro</td><td>Yes</td><td>No</td></tr>
                <tr><td>EU/UK</td><td>Libre 2</td><td>Yes</td><td>Limited</td></tr>
                <tr><td>UAE</td><td>Libre 2</td><td>Yes</td><td>Limited</td></tr>
                <tr><td>USA</td><td>Libre 3 Plus</td><td>No</td><td>Yes</td></tr>
            </table>

            <h3>M1 Lite</h3>
            <h4>Key Features</h4>
            <ul>
                <li>Bring Your Own Sensor: Utilize your existing compatible Abbott sensors</li>
                <li>Advanced Metabolic Insights: Metabolic Score, Food Score, Glucose Trends</li>
                <li>Integration with Ultrahuman Ring AIR</li>
            </ul>

            <h4>Regional Compatibility</h4>
            <ul>
                <li>India: FreeStyle Libre and Libre Pro sensors</li>
                <li>Europe: FreeStyle Libre 2 sensors</li>
                <li>USA: FreeStyle Libre 3 Plus sensors</li>
            </ul>

            <h3>Common Issues & Solutions</h3>
            <h4>Invalid Readings</h4>
            <p>CGM stints showing critically low (<40) or very high (>400) values. Replace sensor if continuous for 6+ hours.</p>

            <h4>Failed To Start</h4>
            <p>Sensor age not firing up from 0, or "NotActivated". Replace after 2-3 countdown attempts.</p>

            <h4>Baseline Issues</h4>
            <p>Readings too high/low. Use manual calibration with glucometer reading.</p>

            <h4>Unable To Scan</h4>
            <p>Phone restart, toggle NFC, check for phone case interference.</p>

            <h4>Multiple Accounts Scan</h4>
            <p>Filter by sensor UID to identify which email was used initially.</p>

            <h4>Applicator Fail</h4>
            <p>Sensor doesn't release from applicator. Ask for photos and replace.</p>

            <h4>Sensor Discomfort</h4>
            <p>Rashes, swelling, pain. Rate pain 1-10, offer replacement for 7-10 range.</p>

            <h3>Debugging M1 Issues</h3>
            <h4>Invalid Readings</h4>
            <p>What it looks like: Reading stuck on same value. Solution: Replace if continuous for 6+ hours.</p>

            <h4>Failed To Start</h4>
            <p>Sensor keeps showing 60-minute countdown. Replace after 2-3 attempts.</p>

            <h4>Baseline Issues</h4>
            <p>User reports readings too low/high. Calibrate using glucometer reference.</p>

            <h4>Unable To Scan</h4>
            <p>iOS: Check NFC location. Android: Toggle NFC, remove case.</p>

            <h4>Multiple Accounts Scan</h4>
            <p>Age starts from number >0. Migrate sensor to correct email.</p>

            <h4>Applicator Fail</h4>
            <p>Pin missing or sensor stuck. Replace immediately.</p>

            <h4>Sensor Discomfort Cases</h4>
            <p>Rate pain 1-10. Replace for severe cases (7-10).</p>

            <h4>M1 Live Missing Data/Frequent Disconnection</h4>
            <p>Ensure Bluetooth and background sync enabled. Check app permissions.</p>

            <h4>Non-Live Sensor Missing Data</h4>
            <p>Scan at least once every 8 hours for non-live sensors.</p>

            <h4>Sensor Knock-Off Cases</h4>
            <p>Replace if user has UHX. Non-UHX users cannot get replacement.</p>

            <h4>Whitelisting</h4>
            <p>For external sensors in Europe. Mark sensor as "M1 live" in CGM Stints.</p>

            <h4>US M1 Sync Issues</h4>
            <p>Libre 3 Plus data flows: Sensor > Libre 3 Plus app > Terra > Ultrahuman app.</p>

            <h3>Knowledge Tree</h3>
            <p>tag (topic + issue)TopicIssueProtocol</p>
            <p>sensor_scan_not_working Sensor Sensor fails to successfully scan and enter the 60 min warm up stage This is a possible NFC not working situation. Three troubleshooting techniques we go for - a) Restarting the phone b) Uninstalling and reinstalling the app c) Logging out and logging in If the user is on an iPhone, simply asking them the iPhone works. If the NFC issue persists, request the user to check with family/friends for an NFC enabled phone. The start once they successfully activate their sensor worries there. Also, the sensor stores data for if there's anyone's phone that they could use once every 7 hours, that would do it. The user be logged in from multiple devices using the same details, so they can monitor from their phone make all the necessary inputs and just use the friends/family phone for scanning. Some quirky pointers - If the user is using a Samsung phone, ask them to off their case and use the back side of their phone scan the sensor. Sometimes the case's thickness the NFC from working properly. There seems to be some problem with OnePlus phone's NFC. Just confirm the phone model or proceeding with troubleshooting problems.</p>
            <p>sensor_invalid_readings Sensor Sensor is reporting invalid readings (â‰¤40 or â‰¥500) for over 6-8 hours. Readings less than 40 and higher than 500 considered invalid readings. Check this data on Stints place of the Ops Dash. If invalid readings persist for over 6 hours, replace. If the user is in the first 24 hours, we ask them for the first 24 hour window.</p>
            <p>sensor_invalid_reading_midway Sensor Cyborgs graph isn't updating upon scanning/stuck at the same value Check 'CGM Stints/Lifetime Data' on the ops dashboard. Look for readings below 40 or above If it's Day 1 on the sensor, let the user know sensor takes 24 hours to calibrate. If it's past Day 1 and the sensor has been replaced invalid readings for over 6-8 hours, process a replacement.</p>
        `
    },
    'ring-air': {
        title: 'Ring AIR Documentation',
        content: `
            <div class="ring-air-embed">
                <div class="ring-air-embed__intro">
                    <h3>Ultrahuman Ring AIR Knowledge Base</h3>
                    <p>The full Ultra-CX Bible export for Ring AIR is embedded below so every section from the screenshots&mdash;product overview, sizing, circadian rhythm guidance, app walkthroughs, battery wizard, and referral flows&mdash;is available with the exact copy, images, and attachments.</p>
                    <ul class="ring-air-embed__highlights">
                        <li>Product overview, key features, box contents, and colorways</li>
                        <li>App walkthrough + metrics, biomarker explainers, and circadian rhythm playbooks</li>
                        <li>Battery Health Wizard, troubleshooting flows, sizing charts, and referral guides</li>
                    </ul>
                </div>
                <iframe
                    src="G%20Docs/Updated/The%20Ultra-CX%20Bible%201b2755317a9180dc8e17f8951755fa44.html#1b475531-7a91-80bf-b030-dfc7188425fd"
                    title="Ultrahuman Ring AIR CX Bible"
                    loading="lazy">
                </iframe>
            </div>
        `
    },
    'ring-rare': {
        title: 'Ring RARE Documentation',
        content: `
            <h3>Ring RARE Overview</h3>
            <p>Quick reference for the Ring RARE hardware variant: setup, pairing, sizing, and day-one expectations.</p>
            <ul>
                <li>Box contents and wear guidance for RARE.</li>
                <li>Pairing, firmware update, and Bluetooth sync checks.</li>
                <li>Common troubleshooting: battery, sensor readings, data gaps.</li>
            </ul>

            <h4>Support Playbooks</h4>
            <ol>
                <li>Eligibility and replacement criteria for RARE units.</li>
                <li>When to escalate to hardware QA or logistics.</li>
                <li>Shipping, sizing swaps, and return steps.</li>
            </ol>
        `
    },
    'powerplug': {
        title: 'PowerPlug Documentation',
        content: `
            <h3>PowerPlug Overview</h3>
            <p>Ultrahuman PowerPlugs are individual apps and plugins built on top of Ultrahuman's health data stack. They enable personalized health insights.</p>

            <h4>Available PowerPlugs</h4>
            <ul>
                <li>Circadian Rhythm</li>
                <li>Pregnancy Insights</li>
                <li>Cycle Tracking</li>
                <li>Cycle and Ovulation Pro</li>
                <li>Caffeine Window</li>
                <li>Vitamin D</li>
                <li>Social Jet Lag</li>
                <li>AFib Detection</li>
                <li>Weight Loss</li>
                <li>Ovulation (Coming Soon)</li>
                <li>Cardio Adaptability</li>
                <li>TeslaSync</li>
                <li>Screen time</li>
            </ul>

            <h4>Free vs Premium</h4>
            <ul>
                <li><strong>Free:</strong> Vitamin D, Cycle Tracking, Pregnancy Insights, Circadian Alignment, Caffeine Window</li>
                <li><strong>Premium:</strong> AFib Detection, Cardio Adaptability</li>
            </ul>

            <h3>Specific PowerPlug FAQs</h3>
            <h4>AFib Detection</h4>
            <p>Monitors nocturnal heart rhythm for early signs of Atrial Fibrillation. Available in Australia, Europe, Singapore, UAE, UK, Saudi Arabia.</p>

            <h4>Circadian Rhythm</h4>
            <p>Provides personalized recommendations for light exposure, exercise, and wind down times based on your natural circadian clock.</p>

            <h4>Caffeine Window</h4>
            <p>Optimizes caffeine consumption timing based on your sleep patterns and daily routines.</p>

            <h4>Vitamin D</h4>
            <p>Calculates optimal sun exposure times based on skin type, location, and UV index.</p>

            <h4>Cycle Tracking</h4>
            <p>Comprehensive menstrual cycle overview with fertility windows and symptom patterns.</p>

            <h4>Ovulation</h4>
            <p>Helps identify fertile days and monitor menstrual health.</p>

            <h4>Pregnancy Mode</h4>
            <p>Tracks sleep patterns, movement, HR, HRV, temperature for each trimester.</p>

            <h4>Jet Lag</h4>
            <p>Personalized plans for adjusting to new time zones using light exposure, melatonin, caffeine, and naps.</p>

            <h4>Weight Loss</h4>
            <p>Integrates meal planning with glucose monitoring and automated food logging.</p>

            <h4>Cardio Adaptability</h4>
            <p>Assesses heart's ability to adjust to varying physical demands. Provides nightly reports on cardiovascular trends.</p>

            <h3>Technical Requirements</h3>
            <h4>Device Compatibility</h4>
            <ul>
                <li>iOS: 15.0 or newer</li>
                <li>Android: 6.0 or newer</li>
            </ul>

            <h4>Location Permissions</h4>
            <p>Required for Vitamin D PowerPlug to calculate UV exposure based on location.</p>

            <h4>Background Sync</h4>
            <p>Necessary for continuous data collection, especially for AFib and Cardio Adaptability.</p>

            <h3>Subscription & Billing</h3>
            <h4>Trial Period</h4>
            <ul>
                <li>Yearly subscription: 7 days free trial</li>
                <li>Monthly subscription: 3 days free trial</li>
            </ul>

            <h4>Cancellation</h4>
            <p>Cancel through app store settings. Refunds processed according to platform policies.</p>

            <h3>Common Issues</h3>
            <h4>Data Not Syncing</h4>
            <p>Check internet connection, app permissions, and background sync settings.</p>

            <h4>Inaccurate Readings</h4>
            <p>Ensure proper ring fit and consistent wear patterns.</p>

            <h4>Subscription Not Activating</h4>
            <p>Check payment method and app store account status.</p>

            <h3>Menstrual Cycle: Basics</h3>
            <p>A menstrual cycle is measured from the first day of your period to the day before your next period.</p>
            <p>The average length of a menstrual cycle is 28 days, but everyone's cycle is different. For example, teenagers might have cycles that last 45 days, whereas people in their 20s to 30s might have cycles that last 21 to 38 days.</p>
            <p>NOTE: Cycle length and period length are 2 different things.</p>
            <p>The menstrual cycle has 4 phases:</p>
            <ol>
                <li>Menstrual Phase: This is when women have a period. The uterus lining sheds and flows out of the vagina. The period contains blood, mucus and some cells from the lining of the uterus. The average length of a period is 3 to 7 days.</li>
                <li>Follicular phase: This phase starts on the first day of the period and lasts for 13 to 14 days. Changing hormone levels cause the lining of the uterus to thicken and follicles to grow on the surface of the ovaries. Usually only one follicle will mature into an egg.</li>
                <li>Ovulation phase: This is when a mature egg is released from an ovary. This usually happens once a month, about 2 weeks before the next period. This is also the time when the chances of getting pregnant are the highest.</li>
                <li>Luteal phase: In this phase, the egg travels through the fallopian tubes to the uterus. The uterus lining continues to thicken in preparation for pregnancy. In case one gets pregnant, they won't have a period, otherwise they will have a period and the menstrual cycle will start over again. (14 days)</li>
            </ol>

            <h3>Body Parameters and how they vary during a cycle</h3>
            <table>
                <tr><th>FACTOR</th><th>MENSTRUAL PHASE</th><th>OVULATORY PHASE</th><th>LUTEAL PHASE</th></tr>
                <tr><td>Core body temperature</td><td>Decreases</td><td>Starts to increase</td><td>Further increases and remains high till next period</td></tr>
                <tr><td>HRV</td><td>Increases</td><td>Further increases</td><td>Decreases</td></tr>
                <tr><td>Resting HR</td><td>Decreases</td><td>Inconclusive</td><td>Mild increase</td></tr>
                <tr><td>HR</td><td>Decreases</td><td>Increases</td><td>Further increases</td></tr>
                <tr><td>RR</td><td>Decreases</td><td>Further decreases</td><td>Mild increase</td></tr>
                <tr><td>Skin perfusion</td><td>Higher</td><td>Lower</td><td>Inconclusive</td></tr>
            </table>

            <h4>MENSTRUAL PHASE:</h4>
            <p>Core body temperature, RHR and RR â¬‡</p>
            <p>HR â¬‡ compared to other phases</p>
            <p>HRV, Skin perfusion â¬†</p>

            <h4>OVULATORY PHASE:</h4>
            <p>Core body temperature starts to â¬†</p>
            <p>HRV and HR further â¬†</p>
            <p>RR and skin perfusion â¬‡</p>
            <p>RHR inconclusive</p>

            <h4>LUTEAL PHASE:</h4>
            <p>Core body temperature, RHR, HR and RR â¬†</p>
            <p>HRV â¬‡</p>

            <h3>App Onboarding</h3>
            <p>Users are prompted to integrate and import their cycle data from a third party app (if any), input their primary goal for using this powerplug, period length, cycle regularity, cycle length, period dates, health conditions (if any) and any birth control used in the last 6 months.</p>

            <h3>Integrations</h3>
            <ul>
                <li>We only import period start and end dates from the integrated apps.</li>
                <li>As soon as the user integrates the two apps, the data should sync immediately.</li>
                <li>For the users facing issues logging in their Clue app, flag the cases to Terra on this thread.</li>
                <li>Once the cycle data has been imported into UH from the integrated apps, further changes to the data on the third party app won't change the data in UH. Also, any changes made to the data by the user on UH won't be written back to the integrated app.</li>
            </ul>

            <h3>Cycle tracking: Tracking for basic cycle health</h3>
            <h4>Input parameters:</h4>
            <ol>
                <li>period_ranges: A list of period ranges, each containing: Start date of a period, End date of the same period</li>
                <li>last_cycle_length: Integer representing the length of the most recent cycle (for irregular cycles)</li>
                <li>typical_cycle_length: Integer representing the typical cycle length (for regular cycles)</li>
            </ol>
            <h4>How algo works:</h4>
            <p>Take last cycle_start_date > Add typical_cycle_length (for regular cycles) or last_cycle_length (for irregular cycles) to it > You get predicted_cycle_start_date of the next cycle > Take difference of last cycle_end_date and cycle_start_date to get cycle duration > Add to predicted_cycle_start_date to get predicted_cycle_end_date</p>
            <p>NOTE: Current algo assumes future cycles will resemble past cycles and doesn't account for external factors that might affect the cycles (like stress, medication, health conditions, etc)</p>
            <h4>At any given time, the user would have to be in one of the 6 states:</h4>
            <ol>
                <li>Menstrual phase: When the user is in their logged menstrual stage (banner shows period start and calculated end dates)</li>
                <li>Follicular phase: The phase between menstrual and ovulation phases (banner shows next predicted period dates)</li>
                <li>Ovulation phase: When the user is in their ovulation phase (banner shows next predicted period dates)</li>
                <li>Luteal phase: Phase between ovulation and predicted menstrual phase dates (banner shows next predicted period dates)</li>
                <li>Predicted menstrual phase: Menstrual dates predicted by the algo (banner shows the current predicted dates)</li>
                <li>Unconfirmed phase: If user hasn't logged their periods even after 7 days have passed past the predicted menstrual phase dates (no banner shown)</li>
            </ol>
            <p>NOTE: At the moment there's a bug in the algo whereby the user's max cycle length gets capped to 30 days once they start using the PP. This isn't an issue for the regular cyclers but for irregular ones, this can result in app showing unconfirmed phase until they log in their next cycle dates.</p>
            <h4>The powerplug remains 'in calibration' mode until the following criterias are met:</h4>
            <ol>
                <li>At least 3 cycle start dates</li>
                <li>At least 50% biomarker data for those cycles</li>
                <li>BMI â‰¤28, age is â‰¤ 40</li>
            </ol>

            <h3>Tracking to get pregnant</h3>
            <h4>Definitions:</h4>
            <ol>
                <li>Fertile window: 5 days before ovulation day, ovulation day and one day after ovulation day. So, 7 days in total.</li>
                <li>Outside fertile window: Any day that's outside the above defined fertile window duration.</li>
                <li>Approaching fertile window: The day after the period ends up until the start of the fertile window.</li>
            </ol>
            <h4>How algo works:</h4>
            <p>Divided into 3 phases:</p>
            <ol>
                <li>Phase 1: From start of menses upto <40% of cycle duration. Uses past data (cycle start date+biomarkers) to predict fertile window</li>
                <li>Phase 2: Fertile window (>40% to 70% of cycle duration+5 days) Biomarker algo kicks in and predicts new fertile window (only if enough biomarker data is present)</li>
                <li>Phase 3: From 5 days past 70% of cycle duration up until the next period start date Uses past data to calculate next fertile window</li>
            </ol>
            <p>The predicted ovulation window is determined by anchoring to your period start date and detecting a biosignature pattern from your temperature, resting heart rate (RHR), and heart rate variability (HRV). As the cycle advances, additional data improves the algorithm's accuracy in detecting the biosignature. This can sometimes shift the predicted ovulation window, especially because we're forecasting the window in real-time, during the cycle itself.</p>
            <p>NOTE (1): Even 1 day of inaccurate data can affect C&O forecasts. However, we use a 3 day rolling window for data prediction, hence, the user will start seeing major shifts in their fertile window predictions if the data remains inaccurate for 3 days continuously.</p>
            <p>NOTE(2): The temperature deviation shown in the powerplug tile is different from the skin temperature deviation captured on the home page of the app. This is because we use a 30 day rolling baseline for the calculation of temp deviation for C&O powerplug.</p>

            <h3>Women's Health Dashboard</h3>
            <h4>Cycle Tracking Configs Dashboard:</h4>
            <p>This dashboard gives all the details filled by the user while onboarding into their Cycle & Ovulation Powerplug</p>
            <h4>Menstrual Cycles Dashboard:</h4>
            <p>This dashboard shows all of the cycles and their data tracked by the user along with the predicted cycle dates computed by our algorithm.</p>
            <p>NOTE: We use this dashboard only to check cycle data and other onboarding details filled by the user. This is intended to give a complete overview of the data being shown to the user on their app.</p>

            <h3>Troubleshooting</h3>
            <p>NOTE: To troubleshoot any technical issue with the user's powerplug, updating their ring's firmware, resets or making them re-onboard the powerplug is not going to help. We would have to flag it to the tech team.</p>
            <ul>
                <li>User feels their ovulation dates predicted by the app aren't correct: Troubleshooting: Currently its not possible to input/log/correct ovulation day that is predicted by the system. But this is an enhancement planned in the next version for April.</li>
                <li>Users complain that their predicted period days aren't correct: Troubleshooting: They can always "log" their period by tapping the calendar icon on the top right next to the edit cycle details button and we'll revise that to recalculate their phases.</li>
                <li>The user feels there are days where their temperature has not been recorded (in cycle tracking): When deviation from the recorded baseline is very close to 0, there are no bars shown on the graph. We're working on improvements to the feature so that this is clear going forward. (Currently may also show as "- -" on a given day, on the app)</li>
                <li>Users complain that they are seeing the 'in calibration' banner even after logging in past 3 cycles data and wearing the ring continuously: Troubleshooting: We show the "In calibration" if we can't come up with a fertility high confidence. This high confidence is decided on some factors as described.</li>
                <li>User notices that predicted ovulation window changes on a given day: We predict the ovulation window for a user based on 3 biomarkers (temperature deviation, RHR and HRV) - hence, if on any day we find that these biomarkers are more (or less) suggestive towards a certain day, the algorithm will change basis the stronger suggestive biomarker pattern. Hence, the predicted ovulation window may dynamically change.</li>
                <li>Users complain that the temperature being shown in their sleep index section and the one being shown inside the powerplug are different: Troubleshooting: For the temperature you see on the Sleep Index details page, we calculate it by excluding nap sleep. This gives you an average skin temperature during your main sleep period, without naps affecting the value. However, the skin temperature in the Cycle Tracking details page is pulled from your baseline temperature, which includes all temp data within sleep boundariesâ€”naps included. Hence, the difference.</li>
            </ul>

            <h3>WIP</h3>
            <ul>
                <li>Expanding period logging limits from the current min 3 and max 10 days capability.</li>
                <li>Handling non bleeding users</li>
                <li>Non-bleeding users: "Amenorrhea," or the absence of menstruation, can be normal during certain periods like before puberty, during pregnancy or breastfeeding, or after menopause, but can also be a sign of various medical conditions or lifestyle factors.</li>
                <li>SPOTTING: Spotting refers to light vaginal bleeding that occurs outside of your regular menstrual period. Spotting can have various causes, including hormonal fluctuations, ovulation, birth control methods, pregnancy (implantation bleeding), or even certain medical conditions. Spotting is lighter and less prolonged than a regular period, and it usually doesn't require the use of pads or tampons.</li>
                <li>Make provision to input LH result</li>
                <li>Increase temp data to upto 2 decimal places.</li>
                <li>Freezing ovulation prediction beyond a certain point of time and not letting it keep shifting.</li>
                <li>And many more...</li>
            </ul>
            <p>Specific improvements we're working on to address some of the issues over the next few weeks:</p>
            <ol>
                <li>Stabilizing the ovulation window â€” Once a high-probability ovulation window is identified, we'll prevent multiple shifts later in the same cycle.</li>
                <li>Marking ovulation day â€” You'll be able to manually mark your ovulation day to refine predictions and improve future accuracy.</li>
                <li>Bug fixes for irregular cycles â€” We're fixing issues that impact predictions for users with irregular cycle lengths.</li>
            </ol>
        `
    },
    'ultrahuman-home': {
        title: 'Ultrahuman Home Documentation',
        content: `
            <h3>Ultrahuman Home Overview</h3>
            <p>The future of healthy living - Ultrahuman Home is a comprehensive home health monitoring device that tracks environmental factors affecting your well-being.</p>

            <h4>What's Included</h4>
            <ul>
                <li>Ultrahuman Home device</li>
                <li>USB-C cable for power</li>
                <li>Notecard with message</li>
                <li>Product brochure</li>
            </ul>

            <h4>Key Features</h4>
            <ul>
                <li>Temperature monitoring</li>
                <li>Humidity tracking</li>
                <li>Particulate matter detection</li>
                <li>Noise level measurement</li>
                <li>Smoke detection</li>
                <li>Blue light monitoring</li>
                <li>UV light assessment</li>
            </ul>

            <h3>Technical Specifications</h3>
            <h4>Device Requirements</h4>
            <ul>
                <li>iOS: 15.0 or newer</li>
                <li>Android: 6.0 or newer</li>
            </ul>

            <h4>Connectivity</h4>
            <ul>
                <li>Wi-Fi range: Up to 20 feet</li>
                <li>Bluetooth range: Up to 8 feet</li>
            </ul>

            <h4>Power Consumption</h4>
            <p>2 Watts of power consumption</p>

            <h4>Coverage Area</h4>
            <p>Approximately 500 square feet per device</p>

            <h3>Sensors & Accuracy</h3>
            <h4>Sensor Array</h4>
            <ul>
                <li>Temperature sensors</li>
                <li>Humidity sensors</li>
                <li>Particulate matter sensors</li>
                <li>Precision microphones</li>
                <li>Natural light sensors</li>
                <li>UV sensors</li>
                <li>Blue light sensors</li>
                <li>Infrared sensor (for mapping)</li>
            </ul>

            <h4>Data Accuracy</h4>
            <p>Calibrated against industry-standard devices with rigorous quality checks.</p>

            <h3>Setup & Usage</h3>
            <h4>Optimal Placement</h4>
            <p>Install in bedroom and spaces where you spend most time for best insights.</p>

            <h4>Multi-User Access</h4>
            <p>Up to 10 people can access data simultaneously through cloud sharing.</p>

            <h4>Data Storage</h4>
            <p>Device stores data for up to 15 days, with cloud backup available.</p>

            <h3>Health Insights</h3>
            <h4>Sleep Quality Improvement</h4>
            <ul>
                <li>Temperature regulation</li>
                <li>Humidity control</li>
                <li>Noise reduction</li>
                <li>Blue light management</li>
            </ul>

            <h4>Air Quality Monitoring</h4>
            <ul>
                <li>PM1, PM2.5, PM10 detection</li>
                <li>CO and CO2 monitoring</li>
                <li>Pollutants: Pollen, particulate matter</li>
            </ul>

            <h4>Circadian Rhythm Support</h4>
            <ul>
                <li>UV light exposure tracking</li>
                <li>Blue light management</li>
                <li>Natural light optimization</li>
            </ul>

            <h3>Smart Integrations</h3>
            <h4>IFTTT Compatibility</h4>
            <p>Seamlessly syncs with smart home devices via IFTTT protocols.</p>

            <h4>Apple HomeKit</h4>
            <p>Compatible with Apple HomeKit and Thread protocol devices.</p>

            <h4>Automation Examples</h4>
            <ul>
                <li>Air quality triggers air purifier</li>
                <li>Humidity levels control humidifiers</li>
                <li>Temperature adjustments for optimal sleep</li>
            </ul>

            <h3>Privacy & Security</h3>
            <h4>Microphone Privacy</h4>
            <p>All audio processing conducted locally. Physical mic cut-off button for control.</p>

            <h4>Data Security</h4>
            <p>EMF emissions comparable to standard household devices.</p>

            <h4>Safety</h4>
            <p>Safe for pregnant women, children, and all household members.</p>

            <h3>Purchase & Support</h3>
            <h4>Availability</h4>
            <p>Available for purchase on the Ultrahuman website.</p>

            <h4>Shipping</h4>
            <p>Ships within 5-7 business days.</p>

            <h4>Warranty</h4>
            <ul>
                <li>30-day return policy</li>
                <li>12-month warranty covering electronics and sensors</li>
            </ul>

            <h4>Customs & Taxes</h4>
            <p>Additional costs may apply for international shipping.</p>

            <h3>Troubleshooting</h3>
            <h4>Connection Issues</h4>
            <ul>
                <li>Check Wi-Fi/Bluetooth range</li>
                <li>Verify device compatibility</li>
                <li>Restart device and app</li>
            </ul>

            <h4>Data Sync Problems</h4>
            <ul>
                <li>Ensure stable internet connection</li>
                <li>Check app permissions</li>
                <li>Verify cloud sync settings</li>
            </ul>

            <h4>Accuracy Concerns</h4>
            <ul>
                <li>Calibrate sensors if needed</li>
                <li>Check for environmental interference</li>
                <li>Contact support for advanced diagnostics</li>
            </ul>
        `
    },
    'sops': {
        title: 'SOPs & Procedures Documentation',
        content: `
            <h3>Chat Handling & Flagging SOP</h3>
            <h4>Objective</h4>
            <p>To outline standardized procedures for handling support chat interactions, ensuring high-quality and consistent support via Yellow.AI.</p>

            <h4>Holding Message</h4>
            <p class="highlight">"After carefully reviewing your issue, we've determined that it needs to be escalated to our internal team for a thorough check. We've raised it with the concerned team, and typically this process takes less than 48 hours. In rare cases, it may take up to 72 hours. Please rest assuredâ€”we'll keep this chat open and update you as soon as we have a resolution."</p>

            <h4>Flagging Process</h4>
            <ol>
                <li>Decide issue needs escalation</li>
                <li>Paste flagged URL in [Details > "Flagged Link"]</li>
                <li>Send Holding message</li>
                <li>Change status to ON-HOLD (emails) or assign to FLAGGED QUEUE (chats)</li>
            </ol>

            <h4>Resolution Scenarios</h4>
            <table>
                <tr><th>Scenario</th><th>Mark as Resolved</th><th>Flag</th></tr>
                <tr><td>Issue fully solved, user confirmed</td><td>âœ…</td><td>âŒ</td></tr>
                <tr><td>Feedback/feature request shared</td><td>âœ…</td><td>âŒ</td></tr>
                <tr><td>Refund/replacement processed</td><td>âœ…</td><td>âŒ</td></tr>
                <tr><td>Waiting for user reply after partial solution</td><td>âŒ</td><td>âŒ</td></tr>
                <tr><td>Distress from ring causing injury</td><td>âŒ</td><td>âœ…</td></tr>
                <tr><td>Bug/tech issue pending internal fix</td><td>âŒ</td><td>âœ…</td></tr>
                <tr><td>Transaction/refund issues needing finance review</td><td>âŒ</td><td>âœ…</td></tr>
                <tr><td>Ops issues (ETA, customs, lost packages)</td><td>âŒ</td><td>âœ…</td></tr>
            </table>

            <h3>Flagging Guidelines</h3>
            <h4>Ops Team Flagging</h4>
            <ul>
                <li>ETA/expedite requests</li>
                <li>Customs issues</li>
                <li>Address/SKU changes</li>
                <li>Order-related concerns</li>
            </ul>

            <h4>Finance Team Flagging</h4>
            <ul>
                <li>PayPal refunds</li>
                <li>Bank transfers</li>
                <li>GST/Business Invoice generation</li>
                <li>Refund issues</li>
            </ul>

            <h4>Tech Team Flagging</h4>
            <ul>
                <li>Firmware issues</li>
                <li>App errors</li>
                <li>Unusual ring problems</li>
            </ul>

            <h3>Tagging SOP</h3>
            <h4>Flag Tags</h4>
            <ul>
                <li>Flagged_Tech - Tech team escalations</li>
                <li>Flagged_Ops - Operations team escalations</li>
                <li>Flagged_Finance - Finance team escalations</li>
                <li>Flagged_Other - Other team escalations</li>
                <li>Flagged_Labels - RTO shipping labels</li>
            </ul>

            <h4>Resolution Tags</h4>
            <ul>
                <li>resolved - When issue is fully resolved</li>
            </ul>

            <h3>Tonality Guidelines</h3>
            <h4>Chat Support</h4>
            <ul>
                <li>Chat-like conversations</li>
                <li>Sound light, friendly, pro-active, helpful</li>
                <li>Put yourself in user's shoes</li>
                <li>Be professional, warm, friendly</li>
                <li>Keep responses clear and concise</li>
            </ul>

            <h4>Email Support</h4>
            <ul>
                <li>Detailed responses</li>
                <li>Sound light but detail-oriented</li>
                <li>Responsible and pro-active</li>
            </ul>

            <h3>Important Metrics</h3>
            <ul>
                <li><strong>FRT (First Response Time):</strong> Respond immediately with greeting</li>
                <li><strong>AHT (Average Handling Time):</strong> Prioritize efficiently</li>
                <li><strong>CSAT (Customer Satisfaction):</strong> Post-chat survey rating</li>
            </ul>

            <h3>Best Practices</h3>
            <ul>
                <li>Tag customer messages on time</li>
                <li>Use available macros and shortcuts</li>
                <li>Personalize macro responses</li>
                <li>Maintain friendly, natural tone</li>
                <li>Close conversations when done</li>
                <li>Monitor Kustomer Searches regularly</li>
                <li>Avoid formal greetings like "Good Morning, Sir/Ma'am"</li>
            </ul>

            <h3>C&O Pro Documentation</h3>
            <h4>Core Capabilities</h4>
            <ul>
                <li>Ovulation confirmation with 90% accuracy</li>
                <li>Anovulation cycle detection</li>
                <li>More accurate ovulation window prediction</li>
                <li>Better period prediction</li>
                <li>Enhanced period logging</li>
                <li>Cycle Flagsâ„¢ for hidden fertility clues</li>
            </ul>

            <h4>Cycle Flags</h4>
            <ul>
                <li><strong>Fall to Baseline:</strong> Early progesterone activity</li>
                <li><strong>False Start:</strong> Temporary progesterone surge</li>
                <li><strong>Fall After Ovulation:</strong> Early progesterone decline</li>
                <li><strong>Short Luteal Phase:</strong> <9 days luteal phase</li>
                <li><strong>Early Ovulation:</strong> Before cycle's 35%</li>
                <li><strong>Late Ovulation:</strong> After cycle's 67%</li>
                <li><strong>Slow Rise:</strong> Gradual temperature increase</li>
                <li><strong>Possible Anovulation:</strong> No ovulation detected</li>
            </ul>

            <h4>Regional Availability</h4>
            <ul>
                <li>United States</li>
                <li>United Kingdom</li>
                <li>European Union</li>
                <li>Australia</li>
                <li>Canada</li>
                <li>Norway, Iceland, Isle of Man, etc.</li>
            </ul>

            <h3>DOA Steps</h3>
            <h4>Flowchart Process</h4>
            <ol>
                <li>Charger Test - Verify LED behavior</li>
                <li>Tap Reset Flow - Manual reset procedure</li>
                <li>New Ring Setup - Complete reset</li>
                <li>Ring Replacement - Final escalation</li>
            </ol>

            <h4>Bot Flow Template</h4>
            <ul>
                <li>Entry: "DOA Issue" selection</li>
                <li>Step 1: Charger Test (conditional logic)</li>
                <li>Step 2: Tap Reset Flow</li>
                <li>Step 3: Set Up New Ring</li>
                <li>Step 4: Escalate to Replacement</li>
            </ul>
        `
    }
};

// Override PowerPlug content with updated FAQ/overview
contentData['powerplug'] = {
    title: 'PowerPlug Documentation',
    content: `
    <div class="pp-bubble-row" role="tablist" aria-label="PowerPlug views">
        <button class="pp-bubble active" data-target="pp-overview" role="tab" aria-selected="true">
            <span class="pp-label">
                <strong>Overview</strong>
            </span>
        </button>
        <button class="pp-bubble" data-target="pp-explore" role="tab" aria-selected="false">
            <span class="pp-label">
                <strong>Explore PowerPlugs</strong>
            </span>
        </button>
    </div>

    <div id="pp-overview" class="pp-pane active">
    <h3>What are PowerPlugs?</h3>
    <p>PowerPlugs are Ultrahuman's next-generation platform of modular health features built on top of your Ring AIR data. They allow you to personalize your Ultrahuman experience by unlocking specific insights, capabilities, and tools that match your health goals.</p>
    <p>Think of them as <em>intelligent extensions</em> of your Ring AIR &mdash; optional PowerUps designed to go deeper into areas like sleep, recovery, women's health, heart health, or daily rhythm.</p>
    <p>Each PowerPlug analyzes your existing physiological signals through advanced algorithms and presents science-backed insights without altering your core Ultrahuman experience. Whether it's understanding your Vitamin D rhythm, tracking your ovulation phase, or detecting early signs of atrial fibrillation (AFib), PowerPlugs give you the freedom to choose what matters most to you.</p>

    <hr />

    <h3>How do I activate PowerPlugs?</h3>
    <ol>
        <li>Open the Ultrahuman App and go to your Ring AIR homepage.</li>
        <li>Tap <strong>'Activate more PowerPlugs.'</strong></li>
        <li>Browse through the available options.</li>
        <li>Select the PowerPlug you'd like to add and tap <strong>'Get.'</strong></li>
    </ol>
    <p>If it's a premium PowerPlug, you'll be redirected to your app store to complete your purchase. Once installed, it will appear in your active PowerPlugs list and start working seamlessly with your existing data.</p>

    <hr />

    <h3>Why are some PowerPlugs paid?</h3>
    <p>Some PowerPlugs require deeper computational models, medical-grade validation, or licensed algorithms that go beyond standard wellness analytics. These involve clinical testing, regulatory compliance, and data infrastructure that ensure medical accuracy and reliability.</p>
    <p>By offering both <strong>free and premium</strong> PowerPlugs, Ultrahuman ensures everyone has access to essential wellness insights while providing more specialized, research-backed tools for those who want advanced health analysis.</p>
    <p>Premium PowerPlugs are optional add-ons &mdash; they enhance your experience but never restrict access to Ultrahuman's core features like sleep, recovery, stress, and activity tracking.</p>

    <hr />

    <h3>What are the PowerPlugs available today?</h3>

    <h4><strong>Free PowerPlugs</strong></h4>
    <ul>
        <li><strong>Vitamin D PowerPlug</strong> &mdash; Understand how sunlight exposure impacts your circadian rhythm and vitamin D synthesis.</li>
        <li><strong>Caffeine Window</strong> &mdash; Identify when caffeine helps versus when it disrupts your recovery and sleep.</li>
        <li><strong>Circadian Alignment</strong> &mdash; Optimize activity and rest times based on your biological rhythm.</li>
        <li><strong>Cycle Tracking</strong> &mdash; Predict and understand your cycle phases using multi-biomarker analysis (temperature, HRV, RHR).</li>
        <li><strong>Pregnancy Insights</strong> &mdash; Track key changes and trends through different stages of pregnancy.</li>
    </ul>

    <h4><strong>Premium PowerPlugs</strong></h4>
    <ul>
        <li><strong>Cycle &amp; Ovulation Pro</strong> &mdash; Built using clinically validated OvuSense technology and 15 years of research; delivers >90% accuracy for ovulation confirmation and supports diverse cycle types including PCOS and endometriosis.</li>
        <li><strong>AFib Detection</strong> &mdash; The world's first smart ring feature capable of detecting atrial fibrillation using medical-grade PPG sensing and algorithmic validation.</li>
        <li><strong>Cardio Adaptability</strong> &mdash; Advanced cardiovascular insights measuring how effectively your heart adapts to stress and recovery patterns.</li>
    </ul>

    <hr />

    <h3>Where is AFib Detection available?</h3>
    <p>AFib Detection is currently available in <strong>Europe, the UK, Turkey, and Switzerland</strong>, with expansion plans for the <strong>USA, UAE, and India</strong> underway.</p>
    <p>Regional availability depends on regulatory clearance in each geography, ensuring that users receive medically validated and compliant reports.</p>

    <hr />

    <h3>Can I change my PowerPlug subscription plan?</h3>
    <ol>
        <li>Go to the <strong>PowerPlugs</strong> section.</li>
        <li>Tap the <strong>settings icon</strong> next to any active PowerPlug.</li>
        <li>From there, you can switch between <strong>monthly</strong> and <strong>annual</strong> plans, restore previous purchases, or update payment options at any time.</li>
    </ol>
    <p>Your data and insights remain securely stored and continue seamlessly when you modify or renew a subscription.</p>
    </div>

    <div id="pp-explore" class="pp-pane" hidden>
        <h3 class="pp-heading-center">Explore PowerPlugs</h3>
        <ul class="pp-name-list">
            <li><button type="button" data-key="vitamin-d">Vitamin D PowerPlug</button></li>
            <li><button type="button" data-key="caffeine-window">Caffeine Window</button></li>
            <li><button type="button" data-key="circadian-alignment">Circadian Alignment</button></li>
            <li><button type="button" data-key="cycle-tracking">Cycle Tracking</button></li>
            <li><button type="button" data-key="pregnancy-insights">Pregnancy Insights</button></li>
            <li><button type="button" data-key="cycle-ovulation-pro">Cycle &amp; Ovulation Pro</button></li>
            <li><button type="button" data-key="afib-detection">AFib Detection</button></li>
            <li><button type="button" data-key="cardio-adaptability">Cardio Adaptability</button></li>
        </ul>
        <div class="pp-detail" id="pp-detail" hidden></div>
    </div>
    `
};

const powerplugHtml = contentData['powerplug'].content;

contentData['ultrahumanx'] = {
    title: 'UltrahumanX Documentation',
    content: `
        <h3>UltrahumanX Overview</h3>
        <p>Concierge flows, benefits, and escalation map for UltrahumanX members.</p>
        <ul>
            <li>Verify membership status and perk eligibility.</li>
            <li>Priority routing, SLA expectations, and follow-up cadence.</li>
            <li>How to log specialist hand-offs and track resolutions.</li>
        </ul>

        <h4>Escalation &amp; Recovery</h4>
        <ol>
            <li>Flag criteria for white-glove outreach.</li>
            <li>Service recovery credits and when to seek manager approval.</li>
            <li>Notes format for post-resolution summaries.</li>
        </ol>
    `
};

contentData['chat-email-handling'] = {
    title: 'Chat and Email Handling',
    content: `
        <h3>Chat &amp; Email Handling</h3>
        <p>Guidelines to keep tone, macros, and SLAs consistent across chat and email.</p>
        <ul>
            <li>Openers, closers, and signature templates by channel.</li>
            <li>Tagging, flagging, and when to escalate sensitive tickets.</li>
            <li>Service recovery thresholds and credit guidance.</li>
        </ul>

        <h4>Quality Checklist</h4>
        <ol>
            <li>Confirm user identity and device context.</li>
            <li>Summarize the issue back to the user before proposing fixes.</li>
            <li>Document next steps and share turnaround commitments.</li>
        </ol>
    `
};

contentData['misc'] = {
    title: 'Miscellaneous Resources',
    content: `
        <h3>Miscellaneous References</h3>
        <p>Parking lot for quick links, SOPs, and glossary items that support daily ops.</p>
        <ul>
            <li>Release notes and one-off fixes.</li>
            <li>Tooling links and sandbox credentials (where allowed).</li>
            <li>Glossary for product names, acronyms, and internal tags.</li>
        </ul>
    `
};

// Function to load content for a section

function loadContent(sectionId) {
    const contentElement = document.getElementById(sectionId + '-content');
    if (contentElement && contentData[sectionId]) {
        contentElement.innerHTML = contentData[sectionId].content;
    }
}

// Load all content on page load
document.addEventListener('DOMContentLoaded', function() {
    const powerplugEl = document.getElementById('powerplug-content');
    if (powerplugEl) {
        powerplugEl.innerHTML = powerplugHtml;
        initPowerplugBubbles();
    }

    Object.keys(contentData).forEach(sectionId => {
        if (sectionId === 'powerplug' || sectionId === 'm1-sensor') return; // keep inline HTML for these
        loadContent(sectionId);
    });
    console.log('Content loaded successfully');
});

function initPowerplugBubbles() {
    const container = document.getElementById('powerplug-content');
    if (!container) return;
    const bubbles = container.querySelectorAll('.pp-bubble');
    const panes = container.querySelectorAll('.pp-pane');
    const detail = container.querySelector('#pp-detail');
    const detailButtons = container.querySelectorAll('.pp-name-list button');
    const listWrap = container.querySelector('.pp-name-list');
    const explorePane = container.querySelector('#pp-explore');

    const detailCopy = {
        'vitamin-d': `
            <h4>Vitamin D PowerPlug</h4>
            <p>Vitamin D plays a critical role in maintaining optimal body functions. It influences muscle, bone, and immune system health, aids in calcium absorption, and supports muscle movement.</p>
            <p>It also helps transmit messages from the brain to the body and bolsters the immune system by combating bacteria and viruses. While Vitamin D can be obtained from food, the most effective source is exposure to sunlight. By optimizing your skinâ€™s absorption of sunlight, you can meet your daily Vitamin D intake more efficiently.</p>
            <h5>Introducing the Vitamin D PowerPlug</h5>
            <p>Monitor the amount of Vitamin D you get throughout the day. Access personalised goals and insights based on your skin type. By nudging you towards sunlight exposure during different times of the day, this PowerPlug naturally helps you optimize your Vitamin D levels efficiently.</p>
            <ol>
                <li><strong>Monitor your daily intake</strong> &mdash; Goals are customized to your skin type and location.</li>
                <li><strong>Understand sunlight exposure</strong> &mdash; See how many hours you need and when UV exposure may burn your skin.</li>
                <li><strong>Maximise absorption</strong> &mdash; Discover the best hours and durations to meet your goal.</li>
            </ol>
            <p>Tracking Vitamin D helps improve muscle health, bone health, and immune function. This PowerPlug is live in the Ultrahuman App.</p>
        `,
        'caffeine-window': `
            <h4>Caffeine Window</h4>
            <p>Caffeine Window upgrade now offers real-time tracking of body caffeine levels, personalized cut-off recommendations, and effortless logging via a vast beverage library. Integrated with Brain Waste Clearance, it adapts based on your sleep quality to protect long-term cognitive health.</p>
            <p><a href="https://www.notion.so/21c755317a91806e8f22e67134e9ad04?pvs=21" target="_blank" rel="noopener noreferrer">Read our Caffeine Window FAQ</a></p>

            <h5>How Caffeine Window works</h5>
            <p><strong>Personalized caffeine window</strong> &mdash; Opens 90 minutes after you wake up so adenosine clears naturally. Waiting sharpens caffeineâ€™s impact and reduces crashes. A default cut-off warns when late caffeine could impair deep sleep; logging intake unlocks personalized cut-offs.</p>
            <p><strong>Dynamic body caffeine</strong> &mdash; Every logged drink updates body caffeine levels, decay, and cut-off time so you can manage intake intelligently.</p>
            <p><strong>Easy logging</strong> &mdash; Log from the Caffeine Bar with hundreds of beverages; tagged drinks stay in recents for one-tap logging. Delete logs directly from the graph or timeline.</p>

            <h5>Now syncs with Brain Waste Clearance</h5>
            <ul>
                <li>Strong clearance: earn a <em>Caffeine Bonus</em> and a later cut-off.</li>
                <li>Mildly impaired: get an <em>Early Cut-Off</em> recommendation.</li>
                <li>Poor clearance: a <em>Caffeine Detox</em> day is recommended to protect deep sleep and reset.</li>
            </ul>

            <h5>Why caffeine timing matters</h5>
            <p>Late caffeine can fragment sleep and reduce deep sleep even if you fall asleep normally. Deep sleep fuels Brain Waste Clearance (glymphatic clearance) that removes harmful byproducts like beta-amyloid and tau. Chronic poor clearance is linked to Alzheimerâ€™s and cognitive decline.</p>

            <p><strong>Visuals</strong></p>
            <p><img src="https://blog.ultrahuman.com/wp-content/uploads/2025/06/body-caffeine-levels-1024x576.jpg" alt="Body caffeine levels" loading="lazy"></p>
            <p><img src="https://blog.ultrahuman.com/wp-content/uploads/2025/06/why-caffeine-timing-matters-1024x576.jpg" alt="Why caffeine timing matters" loading="lazy"></p>
            <p><img src="https://blog.ultrahuman.com/wp-content/uploads/2025/06/caffeine-detox-1024x576.jpg" alt="Caffeine detox recommendation" loading="lazy"></p>
        `,
        'cycle-ovulation-pro': `
            <h4>Cycle &amp; Ovulation PowerPlug</h4>
            <p>The Cycle &amp; Ovulation PowerPlug delivers personalized, real-time menstrual insights using your physiology, not calendar averages. It continuously monitors skin temperature, resting heart rate (RHR), and heart rate variability (HRV) to identify hormonal transitions with greater precision.</p>

            <h5>Key features</h5>
            <ul>
                <li><strong>Conception Mode:</strong> Estimates ovulation day and the most fertile days from your physiological signals and adapts as your cycle progresses.</li>
                <li><strong>Cycle Tracking Mode:</strong> Detailed follicular, ovulatory, luteal, and menstrual phase views plus period predictions from your biomarker patterns.</li>
            </ul>

            <h5>Core metrics</h5>
            <ul>
                <li><strong>Skin temperature:</strong> Progesterone-driven rise after ovulation, tracked during sleep to spot follicular-to-luteal shifts.</li>
                <li><strong>Ovulation phase:</strong> Identified via temperature rise + RHR bump + HRV dip (LH surge and progesterone changes).</li>
                <li><strong>Cycle prediction:</strong> Blends history with daily biomarkers; adapts for stress, travel, or illness.</li>
                <li><strong>HRV baseline (30-day):</strong> Estrogen lifts HRV; progesterone lowers it. Baseline filters out one-off bad nights.</li>
                <li><strong>RHR baseline (30-day):</strong> Lowest early cycle, rises toward/after ovulation; averaged to remove noise.</li>
                <li><strong>Fertile phase:</strong> Five days before ovulation through the day after; multi-day heads-up beyond LH strips.</li>
                <li><strong>Cycle regularity:</strong> Leans on history if regular; weights real-time signals if irregular (PCOS, perimenopause).</li>
                <li><strong>Period length &amp; cycle length:</strong> Tracked over time to refine predictions and surface changes.</li>
            </ul>

            <h5>Biomarker behavior by phase</h5>
            <p><strong>Follicular:</strong> Temp steady; HRV higher; RHR lower.</p>
            <p><strong>Ovulation:</strong> Temp starts rising; HRV dips; RHR rises modestly.</p>
            <p><strong>Luteal:</strong> Temp elevated; HRV lower; RHR elevated.</p>
            <p>These trends create a high-resolution view even when cycle length varies month to month.</p>

            <h5>Why this matters</h5>
            <p>Your cycle affects sleep, glucose response, performance, and recovery. Aligning workouts, recovery, and nutrition with your current phase reduces friction, improves consistency, and delivers forecasts tailored to you.</p>

            <h5>Visuals</h5>
            <div class="pp-visuals">
                <figure>
                    <img src="Slide-16_9-18-1536x714.jpg" alt="Cycle Tracking screen showing luteal phase" loading="lazy" onerror="this.onerror=null;this.src='https://dummyimage.com/900x500/ededed/555555&text=Cycle+Tracking+Luteal+Preview';">
                    <figcaption>Cycle Tracking: luteal phase view.</figcaption>
                </figure>
                <figure>
                    <img src="Conception-759x1536-1-768x432.jpg" alt="Conception, logging, and prediction screens" loading="lazy" onerror="this.onerror=null;this.src='https://dummyimage.com/1200x600/ededed/555555&text=Cycle+Conception+%7C+Logging+%7C+Prediction';">
                    <figcaption>Conception mode, cycle logging, and period prediction screens.</figcaption>
                </figure>
            </div>

            <h4 style="margin-top:16px;">Cycle &amp; Ovulation FAQs</h4>
            <p>The PowerPlug uses skin temperature, HRV, RHR, sleep patterns, and stress/recovery to help you understand and act on your cycle.</p>
            <ul>
                <li><strong>Predict periods and ovulation:</strong> Real-time physiology beats calendar guesses.</li>
                <li><strong>Adapt training and recovery:</strong> Match intensity to hormonal shifts.</li>
                <li><strong>Spot irregularities early:</strong> Monitor changes in length or symptoms.</li>
            </ul>

            <h5 style="margin-top:14px;">How does Ring AIR predict ovulation?</h5>
            <ol>
                <li><strong>Cycle calendar analysis:</strong> Estimates ovulation 12-14 days before your next period based on history.</li>
                <li><strong>Biomarker tracking:</strong> Temperature rise post-ovulation, RHR increase before ovulation, HRV dip from hormonal stress.</li>
                <li><strong>Cross-validation:</strong> External hormone tests (LH, estrogen, FSH, progesterone) can refine predictions.</li>
            </ol>

            <h5 style="margin-top:14px;">Can it prevent pregnancy?</h5>
            <p><strong>No.</strong> It is not birth control. Ovulation timing can shift and sperm can survive up to five days. Use medically approved contraception to avoid pregnancy.</p>

            <h5 style="margin-top:14px;">What if I have an IUD?</h5>
            <p>You can still log history. Biomarkers (HRV, RHR, temperature) are tracked; recovery and sleep insights still apply even without ovulation.</p>

            <h5 style="margin-top:14px;">Biomarker trends by phase</h5>
            <p><strong>Menstrual (Days 1-5):</strong> HRV drops, RHR rises, temp may fall, sleep can dip. Focus on recovery and gentle movement.</p>
            <p><strong>Follicular (Days 6-14):</strong> HRV improves, sleep quality rises, estrogen lifts energy. Good for strength, HIIT, and focus.</p>
            <p><strong>Ovulatory (Days 15-17):</strong> Estrogen/testosterone peak; temp rises slightly; HRV may fluctuate. Schedule hardest workouts; support recovery.</p>
            <p><strong>Luteal (Days 18-28):</strong> Progesterone raises temp, lowers HRV, increases RHR; sleep may worsen. Emphasize lower intensity, sleep hygiene, and stress relief.</p>

            <h5 style="margin-top:14px;">How to update cycle details</h5>
            <ol>
                <li>Open Ultrahuman app.</li>
                <li>Go to PowerPlugs &rarr; Cycle Tracking.</li>
                <li>Enter or edit period start/end dates, cycle length, and symptoms.</li>
                <li>Save and sync.</li>
            </ol>
            <p>Keeping details current improves recovery, HRV, sleep, and training recommendations.</p>

            <h5 style="margin-top:14px;">Need help interpreting data?</h5>
            <ol>
                <li>Open Ultrahuman app.</li>
                <li>Tap Profile.</li>
                <li>Select Product Specialist &rarr; How to Interpret Data.</li>
                <li>Chat with an ACSM-certified coach.</li>
            </ol>

            <h5 style="margin-top:14px;">Phase-specific tips</h5>
            <p><strong>Menstrual:</strong> Restorative workouts; prioritize sleep and stress reduction.</p>
            <p><strong>Follicular:</strong> Lean into strength/HIIT; capitalize on higher energy.</p>
            <p><strong>Ovulatory:</strong> Schedule peak efforts; hydrate and manage inflammation.</p>
            <p><strong>Luteal:</strong> Shift to mobility/yoga/walking; tighten sleep hygiene (limit blue light, caffeine, late meals); use 4-7-8 breathing for stress.</p>

            <p>Read more: <a href="https://blog.ultrahuman.com/blog/four-phases-of-the-menstrual-cycle/" target="_blank" rel="noopener noreferrer">Guide to the four phases of the menstrual cycle</a>.</p>
        `,
        'circadian-alignment': `
            <h4>Circadian Alignment PowerPlug</h4>
            <p>The Circadian Alignment PowerPlug helps you sync behavior with your internal clock. Your 24-hour circadian rhythm regulates sleep, alertness, hormones, body temperature, and metabolism. It is most sensitive to light/dark but also responds to movement, food timing, and sleep timing. When aligned, your body anticipates sleep/wake, digestion, and performance; when disrupted (shift work, late screens, travel), you may see poor sleep, mood swings, fatigue, glucose instability, or longer-term metabolic effects.</p>

            <h5>How the PowerPlug works</h5>
            <p>Ring AIR identifies your core temperature minimum (the nightly low point), applies a rolling seven-day average, and excludes the first and last hour of sleep to reduce noise. This minima anchors your circadian clock and powers real-time guidance inside the app.</p>

            <h5>Circadian phases in the app</h5>
            <ul>
                <li><strong>Minima Zone (30 minutes around your temperature minima):</strong> Deep rest; keep it dark and still to protect melatonin and recovery.</li>
                <li><strong>Phase Advance (first ~4 hours after minima):</strong> Light and movement here shift your clock earlier; morning sunlight, a short walk, or light movement boost alertness and support earlier sleep onset.</li>
                <li><strong>Circadian Dead Zone (between advance and delay):</strong> Mostly midday; light or activity have minimal shifting power. Caffeine or exercise here are neutral for clock timing.</li>
                <li><strong>Phase Delay (4-8 hours before minima):</strong> Evening/early night; bright light, screens, heavy meals, or late workouts push your clock later. Dim lights, avoid stimulants, and wind down.</li>
            </ul>

            <h5>Why Ultrahuman tracks it</h5>
            <p>Ultrahuman uses circadian markers (temperature patterns, HR/HRV trends, activity timing) to show how aligned your behaviors are and to guide better sleep, recovery, and metabolic stability.</p>

            <h5>Phase Response Curve (PRC)</h5>
            <p>The PRC maps how light and movement at different times shift your rhythm earlier or later. The PowerPlug uses your minima and PRC to time nudges: get light and activity when your body benefits, wind down when sensitivity is highest.</p>

            <h5>Stress Rhythm Score</h5>
            <p>Your circadian timing also feeds the Stress Rhythm Score, a stress measure that accounts for your body clock. <a href="https://www.notion.so/Stress-Rhythm-Score-explained-217755317a9180eb9c83e7e182132160?pvs=21" target="_blank" rel="noopener noreferrer">Read the Stress Rhythm Score guide</a>.</p>

            <h5>Temperature minima: your anchor</h5>
            <ul>
                <li><strong>What it is:</strong> The lowest point of your core body temperature during sleep.</li>
                <li><strong>Why it matters:</strong> Acts as the reset marker for your circadian clock.</li>
                <li><strong>Phase Advance Window:</strong> Begins ~4 hours after the minima.</li>
                <li><strong>Phase Delay Window:</strong> Occurs before the minima when you are most sensitive to light/stimulants.</li>
                <li><strong>Circadian Dead Zone:</strong> Between these windows; minimal responsiveness.</li>
            </ul>

            <h5>Phase advance window</h5>
            <p>A receptive window (~4 hours after minima) where light and movement shift your clock earlier, supporting earlier sleep/wake and better daytime energy. Example: morning sunlight soon after waking reinforces alertness and an earlier cycle.</p>

            <h5>Circadian dead zone</h5>
            <p>Typically midday between advance and delay; light/activity have limited clock impact. Neutral for caffeine or exercise relative to circadian timing.</p>

            <h5>Phase delay window</h5>
            <p>Occurs before your minima (evening/early night). Light, screens, stimulants, or late intense workouts here delay your clock and suppress melatonin; dim lights and avoid stimulants to protect sleep onset and recovery.</p>

            <h5>Phase advance activity</h5>
            <p>Actions that shift your clock earlier when done in the advance window: bright morning light, first ~1700 steps/short walk, and a well-timed breakfast. Helps improve sleep consistency, jet lag adaptation, shift-work adjustments, and morning alertness. Use the Circadian Rhythm tab to align steps/light with the advance window.</p>

            <h5>Why your advance window moves</h5>
            <ol>
                <li><strong>Sleep timing/quality:</strong> Later or fragmented sleep shifts minima later.</li>
                <li><strong>Evening light:</strong> Bright light/screens delay minima; use dim light or blue-light blockers in phase delay.</li>
                <li><strong>Exercise timing:</strong> Late workouts can delay minima; morning sessions can stabilize/advance it.</li>
                <li><strong>Stimulants/meals:</strong> Late caffeine, heavy meals, or alcohol delay cooling; earlier dinners help stability.</li>
                <li><strong>Travel/time zones:</strong> Minima shifts until you adapt to the new zone.</li>
            </ol>

            <h5>Key factors that shift your rhythm</h5>
            <p>Light (especially natural sunlight) is the strongest cue. Exercise timing, meal timing, naps, travel, illness, and genetics also influence your rhythm. Regular morning light and evening darkness keep it stable and adaptive.</p>
        `
    };

    bubbles.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            bubbles.forEach(b => {
                b.classList.toggle('active', b === btn);
                b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
            });
            panes.forEach(pane => {
                const isTarget = pane.id === targetId;
                pane.classList.toggle('active', isTarget);
                pane.hidden = !isTarget;
            });
        });
    });

    const showAllBubbles = () => {
        detailButtons.forEach(b => b.classList.remove('active'));
        detail.hidden = true;
        detail.innerHTML = '';
        if (listWrap) listWrap.hidden = false;
    };

    detailButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-key');
            detailButtons.forEach(b => b.classList.toggle('active', b === btn));
            if (detailCopy[key]) {
                detail.innerHTML = `
                    <div class="pp-detail-header">
                        <button type="button" class="pp-back" aria-label="Back to PowerPlugs">
                            <span aria-hidden="true">&#8592;</span>
                            <span>Back</span>
                        </button>
                        <a class="pp-troubleshoot" href="#powerplug" aria-label="Open troubleshooting resources">Troubleshooting</a>
                    </div>
                    ${detailCopy[key]}
                `;
                detail.hidden = false;
                if (listWrap) listWrap.hidden = true;
                if (explorePane) explorePane.classList.add('pp-detail-open');
            } else {
                showAllBubbles();
            }
        });
    });

    container.addEventListener('click', (e) => {
        const backBtn = e.target.closest('.pp-back');
        if (backBtn) {
            showAllBubbles();
            if (explorePane) explorePane.classList.remove('pp-detail-open');
        }
    });
}
