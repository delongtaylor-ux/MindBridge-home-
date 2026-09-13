# MindBridge Home Friction Log

This log records concrete obstacles encountered while preparing the MindBridge Home hackathon prototype. It distinguishes development and submission friction from Amazon-specific tool feedback; live Alexa+, MCP, and AWS implementation work has not yet been completed.

## 1. Publishing the complete public repository

**Task attempted:** Publish the source code, license, tests, and documentation to GitHub.

**Steps taken:** Created a public repository, added an MIT License and README, connected GitHub, and attempted to upload the remaining project files.

**Expected result:** The connected workflow would immediately receive permission to write to the new repository.

**Actual result:** The repository was publicly readable, but write requests initially returned a permission error because the GitHub application had not been granted access to that specific repository.

**Severity:** Important

**Workaround used:** Added the repository to the GitHub application's approved repository list and repeated the upload.

**Actionable suggestion:** Provide a repository-access checklist showing which repositories are readable and writable, with a direct control for granting access to newly created repositories.

## 2. Creating a video within the available generation balance

**Task attempted:** Generate a 45-second presenter-led demonstration video.

**Steps taken:** Selected a male AI presenter, real prototype screenshots, narration, captions, and a 45-second duration; then checked the estimated cost.

**Expected result:** The available introductory balance would support a short hackathon demo.

**Actual result:** Three 15-second clips required approximately 405 credits before presenter-image costs, while only 10 credits were available.

**Severity:** Important

**Workaround used:** Created a 45-second screen walkthrough from six real prototype captures with explanatory captions and a scripted-prototype disclosure.

**Actionable suggestion:** Display a live cost estimate while duration, resolution, presenter, audio, and scene count are selected. Provide a low-cost hackathon-demo preset.

## 3. Meeting Devpost video-hosting requirements

**Task attempted:** Submit the completed demonstration video.

**Steps taken:** Rendered and hosted the MP4, verified its duration, and attempted to use the hosted file URL.

**Expected result:** Devpost would accept a publicly accessible direct MP4 link.

**Actual result:** The field required a public YouTube or Vimeo URL.

**Severity:** Important

**Workaround used:** Prepared the completed MP4 for manual upload to YouTube with a title, description, visibility setting, and prototype disclosure.

**Actionable suggestion:** Show accepted providers and visibility requirements beside the field from the beginning, or accept publicly accessible MP4 URLs.

## 4. Distinguishing simulations from implemented integrations

**Task attempted:** Demonstrate the intended Alexa+ and MCP interaction model before the production integrations were complete.

**Steps taken:** Built an interactive web prototype mapping requests to proposed tools including `daily_check_in`, `grounding_exercise`, `create_action_plan`, `find_support_resource`, and `escalate_support`.

**Expected result:** The simulation would communicate the intended architecture without being confused with a production integration.

**Actual result:** Visible tool names could be mistaken for evidence of live MCP requests, Alexa+ interactions, or Amazon Bedrock operations.

**Severity:** Critical

**Workaround used:** Added prototype disclosures to the website, video, README, architecture documentation, and judge packet. Capabilities are classified as implemented, simulated, or planned.

**Actionable suggestion:** Provide an official simulated-Alexa+ template with standardized simulation indicators and a trace panel distinguishing mocked calls from live MCP traffic.

## 5. Providing additional submission files

**Task attempted:** Provide judges with a ZIP containing the judge packet, links, architecture, safety boundaries, verification plan, and implementation status.

**Steps taken:** Generated a five-page PDF, packaged it with a status file, tested the archive, and shared it.

**Expected result:** The generated workspace download would remain available long enough for submission.

**Actual result:** The temporary file link expired on the user's device.

**Severity:** Minor

**Workaround used:** Uploaded the ZIP to a separately hosted download URL and confirmed the upload.

**Actionable suggestion:** Display expiration times on temporary artifact links and provide a durable-download option for files intended for external submission.

## 6. Determining mini-challenge eligibility

**Task attempted:** Determine whether the project should enter the AWS Builder and Open Source Mini Challenges.

**Steps taken:** Compared implemented functionality with each requirement and reviewed the public repository, license, contribution commit, and planned AWS architecture.

**Expected result:** Eligibility would depend primarily on the technologies described in the project plan.

**Actual result:** Eligibility depends on verifiably implemented technology. The project met the open-source requirements but did not yet include an operational AWS integration.

**Severity:** Important

**Workaround used:** Entered the Open Source Mini Challenge and did not select AWS Builder. Supplied the public repository, username, contribution commit, and open-source description.

**Actionable suggestion:** Add an eligibility checklist beneath each mini-challenge selection specifying required evidence such as runtime calls, configuration files, contribution URLs, and demonstration footage.
