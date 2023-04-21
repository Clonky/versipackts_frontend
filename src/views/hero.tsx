import {For} from "solid-js"
export { Header }

class Header {
    navButtons: NavButton[]

    constructor(buttons: NavButton[]) {
        this.navButtons = buttons;
    }

    public default() {
        return new Header([ new NavButton("Home", "Home"), new NavButton("Register", "Register")])
    }


    render() {
        let content =(
        <>
            <div class="header-container">
                <div class="header-content">
                    <For each={this.navButtons}>
                        {ibutton => <button> ibutton.text </button>}
                    </For>
                </div>
            </div>
        </>
        )
    return content;
    }
}

class NavButton {
    text: String;
    dest: String;

    constructor(text: String, dest: String) {
        this.text = text;
        this.dest = dest;
    }
}
