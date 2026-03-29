import prisma from "@/lib/prisma";

interface AuditParams {
  userId?: string;
  action: string;
  entity?: string;
  entityId?: string;
  metadata?: any;
  ip?: string;
}

export async function auditLog({
  userId,
  action,
  entity,
  entityId,
  metadata,
  ip,
}: AuditParams) {
  await prisma.auditLog.create({
    data: {
      userId,
      action,
      entity,
      entityId,
      metadata,
      ip,
    },
  });
}