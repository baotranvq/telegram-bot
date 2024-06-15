import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { HttpService } from '@nestjs/axios';
import { Cron, CronExpression } from '@nestjs/schedule';
@Injectable()
export class TelegramService {
  private readonly botToken = '7377265021:AAFZEpqTb3ehJ67QvgCgcupxicGG33Vkwyw';
  private bot: TelegramBot;

  constructor(private readonly httpService: HttpService) {
    console.log(this.botToken);
    this.bot = new TelegramBot(this.botToken, { polling: true });
  }
  async handleSenMessage(teleId: string): Promise<any> {
    console.log('Send message', teleId);
    try {
      return await this.bot.sendMessage(-4254849153, 'Hello Group');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }

  // @Cron(CronExpression.EVERY_10_SECONDS)
  // async handleGetUp() {
  //   this.bot.sendMessage(-4254849153, `Hello bao`, { parse_mode: 'Markdown' });
  // }
}
