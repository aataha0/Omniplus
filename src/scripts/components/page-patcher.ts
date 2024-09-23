// Removes the header image on Omnivox to free up more space.
export function removeHeaderImage() {
    const headerImageElement = document.querySelector('#headerImage');
    if (headerImageElement) {
        // Set its height to 0.
        (<HTMLElement> headerImageElement).style.height = '0';
    }
}

// Removes all line break elements that extend the size of the page for no reason.
export function removeAllLineBreaks() {
    const subtitleLine2: HTMLElement = document.querySelector("span.sousTitrePageLigne2");
    if (subtitleLine2) {
        const subtitleLineBreak = subtitleLine2.previousElementSibling;
        if (subtitleLineBreak && subtitleLineBreak.tagName === 'BR') {
            subtitleLine2.style.fontSize = '16px';
            subtitleLine2.insertAdjacentText('beforeend', ' ');
            subtitleLineBreak.remove();
        }
    }

    // Remove extra line breaks, but not all of them.
    Array.from(document.querySelectorAll('br + br'))
        .forEach((element) => element.parentElement.removeChild(element));
}

export function removeEmptySessionOption() {
    const emptyOption: HTMLElement = document.querySelector('#cntFormulaire_drpChangeSession > option[value=""]');
    if (emptyOption) {
        emptyOption.style.display = 'none';
    }
}

// Certain Lea pages have an unnecessary print version button.
export function removePrinterFriendlyButton() {
    const printerFriendlyButton: HTMLElement = document.querySelector('.td-liens');
    if (printerFriendlyButton) {
        printerFriendlyButton.style.display = 'none';
    }
}

// Lea's stylesheet makes all hovered <a> elements red. Remove the rule if it exists.
export function removeLeaAnchorHoverCSSRule() {
    for (const styleSheet of document.styleSheets) {
        for (let i = 0; i < styleSheet.cssRules.length; i++) {
            if (styleSheet.cssRules[i].cssText.includes('a:hover:not(.btn.waves-effect)')) {
                styleSheet.deleteRule(i);
            }
        }
    }
}

export function autoLogin() {
    const usernameElement: HTMLInputElement = document.querySelector('#Identifiant');
    const passwordElement: HTMLInputElement = document.querySelector('#Password');
    // If the elements exist and they have been filled.
    if (usernameElement.value && passwordElement.value) {
        // Click the login button.
        (<HTMLButtonElement>document.querySelector('.btn.green')).click();
    }
}

export function brebeufRemoveHighSchoolLogin() {
    const loginButtonContainer: HTMLElement = document.querySelector('.container-roles.nb-roles-3');
    if (loginButtonContainer) {
        const highSchoolLoginButton: HTMLElement = loginButtonContainer.querySelector('#role-1');
        if (highSchoolLoginButton) {
            highSchoolLoginButton.remove();

            loginButtonContainer.classList.remove('nb-roles-3');
            loginButtonContainer.classList.add('nb-roles-2');

            if (localStorage.getItem('login-role-selected') === 'role-1') {
                localStorage.setItem('login-role-selected', 'role-2');
                location.reload();
            }
        }
    
        const cegepLoginButton: HTMLElement = loginButtonContainer.querySelector('#role-2');
        if (cegepLoginButton) {
            cegepLoginButton.textContent = "Étudiants"
        }
    }
}
