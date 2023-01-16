import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AgentsModule } from './agents/agents.module';

@Module({
  imports: [UsersModule, AgentsModule],
})
export class AppModule {}
