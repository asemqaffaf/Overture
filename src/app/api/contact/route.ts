import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'contact-data.json');

interface Submission {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
}

async function readData(): Promise<Submission[]> {
  try {
    const data = await fs.promises.readFile(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch {
    // If the file doesn't exist, return an empty array.
    return [];
  }
}

async function writeData(data: Submission[]) {
  await fs.promises.writeFile(dataFilePath, JSON.stringify(data, null, 2));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new NextResponse(
        JSON.stringify({ message: 'Name, email, and message are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const submissions = await readData();
    submissions.push({ name, email, message, submittedAt: new Date().toISOString() });
    await writeData(submissions);

    return new NextResponse(
      JSON.stringify({ message: 'Form submitted successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return new NextResponse(
      JSON.stringify({ message: 'Internal Server Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
