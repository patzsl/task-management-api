import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Post('login')
    signIn(
        @Body() username: string,
        @Body() password: string
    ) {
        
    }
}
