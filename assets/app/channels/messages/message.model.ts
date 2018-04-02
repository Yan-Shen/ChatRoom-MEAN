export class Message {
    content: string;
    username: string;
    messageId?: string;
    userId?: string;
    channelId?: string;

    constructor(content: string, username: string, messageId?: string, userId?: string, channelId?: string) {
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
        this.channelId = channelId;
    }
}
