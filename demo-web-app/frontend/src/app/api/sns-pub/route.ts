import { NextResponse } from 'next/server';
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';

const snsClient = new SNSClient({
  region: process.env.AWS_REGION || 'ap-northeast-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const params = {
      Message: message,
      TopicArn: process.env.SNS_TOPIC_ARN,
    };

    const command = new PublishCommand(params);
    await snsClient.send(command);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error publishing to SNS:', error);
    return NextResponse.json(
      { error: 'Failed to publish message' },
      { status: 500 }
    );
  }
}
