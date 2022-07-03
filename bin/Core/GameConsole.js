export class GameConsole {
    static LogError(message) {
        this.LOG_AREA.innerHTML += `<p class='console-text-red'>${message}</p>`;
    }
    static LogWarning(message) {
        this.LOG_AREA.innerHTML += `<p class='console-text-orange'>${message}</p>`;
    }
    static LogMessage(message) {
        this.LOG_AREA.innerHTML += `<p class='console-text'>${message}</p>`;
    }
}
//# sourceMappingURL=GameConsole.js.map