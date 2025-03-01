import { readJsonFile } from "@/actions/useJSON"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type") + ".json" as string

  try {
    const jsonData = await readJsonFile(type)
    return NextResponse.json(jsonData)
  } catch (error) {
    console.log(error,'err')
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
} 