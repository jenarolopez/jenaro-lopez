"use server"

import fs from "fs"
import path from "path"

export async function readJsonFile(filePath: string) {
  // Ensure the path is within the src directory for security
  const fullPath = path.join(process.cwd(), "src/json", filePath)

  // Validate that the path is within the src directory
  if (!fullPath.startsWith(path.join(process.cwd(), "src"))) {
    throw new Error("Invalid path: Must be within the src directory")
  }

  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    throw new Error("File not found")
  }

  try {
    // Read the file
    const fileContent = fs.readFileSync(fullPath, "utf8")

    // Parse the JSON
    return JSON.parse(fileContent)
  } catch (parseError) {
    throw new Error("Invalid JSON file")
  }
}

