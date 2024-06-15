import { Controller, Post, Body } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Post('send')
  async handleTelegram(@Body() teleId: string): Promise<any> {
    console.log('++++', teleId);
    const result = await this.telegramService.handleSenMessage(teleId);
    return result;
  }
}
