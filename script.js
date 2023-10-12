function csvToInsertScript(csvData, tableName, columnNames) {
  const rows = csvData.trim().split("\n");
  const insertScript = rows
    .map((row) => {
      const values = row.split(",");
      const formattedValues = values.map((value) => {
        return `'${value.replace(/'/g, "''")}'`;
      });

      return `INSERT INTO ${tableName} (${columnNames.join(
        ", "
      )}) VALUES (${formattedValues.join(", ")});`;
    })
    .join("\n");

  console.log(insertScript);
}

const csvDataInput = document.getElementById("csvData");
const tableNameInput = document.getElementById("tableName");
const columnNamesInput = document.getElementById("columnNames");
const convertButton = document.getElementById("convertButton");

convertButton.addEventListener("click", function () {
  const csvData = csvDataInput.value;
  const tableName = tableNameInput.value;
  const columnNames = columnNamesInput.value.split(",");

  csvToInsertScript(csvData, tableName, columnNames);
});
