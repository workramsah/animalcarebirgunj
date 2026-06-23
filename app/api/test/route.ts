import { NextResponse } from "next/server";

export async function GET() {
    const testData = {
        message: "Hello from API",
        timestamp: new Date().toISOString(),
        data: [
            { id: 1, name: "Test Item 1" },
            { id: 2, name: "Test Item 2" },
            { id: 3, name: "Test Item 3" }
        ]
    };
    return NextResponse.json(testData);
}
