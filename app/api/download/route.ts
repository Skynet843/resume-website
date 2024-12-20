// app/api/download/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const fileId = "1U0wS73Z8QAXQ8kELNzvLKM--u9GP24FT";
  const fileUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  try {
    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch the file");
    }

    const fileBuffer = await response.arrayBuffer();

    return new NextResponse(Buffer.from(fileBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error("Error fetching file:", error);
    return new NextResponse("Failed to download the file", { status: 500 });
  }
}
