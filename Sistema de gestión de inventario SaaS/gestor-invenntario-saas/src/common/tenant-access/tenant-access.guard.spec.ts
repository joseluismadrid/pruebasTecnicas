import { TenantAccessGuard } from './tenant-access.guard';

describe('TenantAccessGuard', () => {
  it('should be defined', () => {
    expect(new TenantAccessGuard()).toBeDefined();
  });
});
