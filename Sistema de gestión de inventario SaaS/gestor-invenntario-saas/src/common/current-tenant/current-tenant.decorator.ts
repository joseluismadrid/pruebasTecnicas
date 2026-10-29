import { Reflector } from '@nestjs/core';

export const CurrentTenant = Reflector.createDecorator<string[]>();
