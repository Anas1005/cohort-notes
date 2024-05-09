// import { Request, Response } from 'express';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function handleMoneyTransfer(req: Request, res: Response) {
//   const senderAccountId = req.body.senderAccountId;
//   const receiverAccountId = req.body.receiverAccountId;
//   const transferAmount = req.body.transferAmount;

//   try {
//     await prisma.$transaction(async (tx) => {
//       const senderAccount = await tx.account.findUnique({
//         where: { id: senderAccountId },
//         select: { balance: true },
//       });

//       const receiverAccount = await tx.account.findUnique({
//         where: { id: receiverAccountId },
//         select: { balance: true },
//       });

//       if (!senderAccount || !receiverAccount) {
//         throw new Error('One or more accounts not found');
//       }

//       if (senderAccount.balance < transferAmount) {
//         throw new Error('Insufficient balance');
//       }

//       await tx.account.update({
//         where: { id: senderAccountId },
//         data: { balance: { decrement: transferAmount } },
//       });

//       await tx.account.update({
//         where: { id: receiverAccountId },
//         data: { balance: { increment: transferAmount } },
//       });

//       res.status(200).json({ success: true, message: 'Money transfer completed successfully' });
//     });
//   } catch (error) {
//     console.error('Error occurred during money transfer:', error);
//     res.status(500).json({ success: false, error: 'Internal server error' });
//   } finally {
//     await prisma.$disconnect();
//   }
// }
