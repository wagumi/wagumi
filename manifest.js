const fs = require("fs");
const path = require("path");

(async () => {
  const manifestData = fs.readFileSync(
    path.resolve(__dirname, "manifest.arkb"),
    "utf-8",
  );
  let manifest = JSON.parse(manifestData);
  let paths = manifest.paths;

  for (var pth in paths) {
    if (pth === "999.png") {
      console.log(manifest.paths["999.png"]);
    }
    // if (pth.endsWith("999.png")) return;
    // let num = pth.replace(".png", "");
    // const metadata = fs.readFileSync(`generated/metadata/${num}`, "utf-8");
    // let metadataJson = JSON.parse(metadata);
    // let arweaveId = manifest.paths[pth].id;
    // metadataJson.image = `https://arweave.net/${arweaveId}`;
    // fs.writeFileSync(`generated/metadata/${num}`, JSON.stringify(metadataJson));
  }
})();
