import { MailerService } from '@nest-modules/mailer';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('forgot-password')
export class AuthConsumer {
  constructor(private mailerService: MailerService) {}
  @Process()
  async forgotPassword(job: Job) {
    try {
      await this.mailerService.sendMail({
        to: job.data.email,
        subject: 'Thay đổi mật khẩu',
        text: `New password: ${job.data.password}`,
      });
    } catch (error) {
      throw error;
    }
  }
}
