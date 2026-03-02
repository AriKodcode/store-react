import fs from "fs";

export const getCards = async (req, res) => {
  try {
    const data = JSON.parse(
      await fs.promises.readFile(
        "/Users/arimac/Desktop/react/store/server/data/data.json",
        "utf-8"
      )
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
