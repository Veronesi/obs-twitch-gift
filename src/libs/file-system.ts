import { singleton } from "tsyringe";
import { app } from "electron";
import path from "node:path";
import fs from "node:fs";

@singleton()
export class FileSystem {
  path = () => app.getPath("userData");
  read(file = "conf.json"): string | null {
    try {
      const userDataPath = app.getPath("userData");
      const filePath = path.join(userDataPath, file);
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf-8");
        const obj = JSON.parse(data);
        return obj;
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  write(data: any, file = "conf.json"): Promise<string> {
    try {
      const userDataPath = app.getPath("userData");
      const filePath = path.join(userDataPath, file);
      return new Promise((resolve, reject) => {
        // Write as plain text if .txt file, otherwise as JSON
        const content = file.endsWith(".txt")
          ? String(data)
          : JSON.stringify(data);
        fs.writeFile(filePath, content, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(filePath);
          }
        });
      });
    } catch (error) {}
  }
}
