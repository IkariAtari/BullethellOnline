class Input {
    static HandleKeys() {
        addEventListener("keydown", (e) => {
            this.KeysDown[e.key.toLowerCase()] = true;
        }, false);
        addEventListener("keyup", (e) => {
            delete this.KeysDown[e.key.toLowerCase()];
        }, false);
    }
}
Input.KeysDown = {};
//# sourceMappingURL=Input.js.map