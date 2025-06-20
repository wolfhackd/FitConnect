-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "Academy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
