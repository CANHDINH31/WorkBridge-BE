import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { SignInDto } from './dto/sign-in.dto copy';
import { VerifyTokenDto } from './dto/verify-token.dto';
import { GoogleDto } from './dto/google.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('google')
  google(@Body() googleDto: GoogleDto) {
    return this.authService.google(googleDto);
  }

  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('verify-token')
  verify(@Body() verifyTokenDto: VerifyTokenDto) {
    return this.authService.verify(verifyTokenDto);
  }

  @Post('google')
  async loginGoogle(@Body() { token }: { token: string }) {
    return await this.authService.verifyToken(token, 'GOOGLE');
  }

  @Post('facebook')
  async loginFacebook(@Body() { token }: { token: string }) {
    return await this.authService.verifyToken(token, 'FACEBOOk');
  }

  @Post('forgot-password')
  async forgotPassword(@Body() { email }: { email: string }) {
    return await this.authService.forgotPassword(email);
  }

  @Post('reset-password')
  async resetPassword(@Body() payload: { password: string; token: string }) {
    return await this.authService.resetPassword(payload);
  }

  @Post('refresh')
  async refresh(@Body() body) {
    const { refreshToken } = body;
    return await this.authService.refreshTokens(refreshToken);
  }
}
