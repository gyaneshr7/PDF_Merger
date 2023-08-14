const PDFMerger = require('pdf-merger-js')

var merger = new PDFMerger()

const mergePdfs = (pdf1, pdf2) => {
  console.log("PDFs to merge",pdf1,pdf2)
  merger.add(pdf1);  //merge all pages. parameter is the path to file and filename.
  merger.add(pdf2); // merge only page 2)
  console.log("This is my pdf 1")

  merger.save('/users/hp/pdf_merger/public/merged.pdf'); //save under given name and reset the internal document
  console.log("Done")
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}

module.exports = {mergePdfs}