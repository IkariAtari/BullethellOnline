export class GameConsole
{
    public static LOG_AREA:Element;

    public static LogError(message:string): void
    {
        // Log error in LOG_AREA
        this.LOG_AREA.innerHTML += `<p class='console-text-red'>${message}</p>`
    }

    public static LogWarning(message:string): void
    {
        // Log error in LOG_AREA
        this.LOG_AREA.innerHTML += `<p class='console-text-orange'>${message}</p>`
    }

    public static LogMessage(message:string): void
    {
        this.LOG_AREA.innerHTML += `<p class='console-text'>${message}</p>`
    }
}