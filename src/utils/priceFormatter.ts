export const priceFormatter = (value: string) => {
  const parts = value.split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1] || "";

  const formattedIntegerPart = integerPart.replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    "$1,"
  );

  return `${formattedIntegerPart}.${decimalPart}`;
};

export function separateDigitsWithCommas(value: string | number): string {
  const numString: string =
    typeof value === "number" ? value.toString() : value;

  const parts: string[] = numString.split(".");
  const integerPart: string = parts[0];
  const decimalPart: string = parts[1] ? `.${parts[1]}` : "";

  let formattedString: string = "";
  let count: number = 0;

  for (let i = integerPart.length - 1; i >= 0; i--) {
    count++;

    const digit: string = integerPart.charAt(i);
    formattedString = digit + formattedString;

    if (count % 3 === 0 && i !== 0) {
      formattedString = "," + formattedString;
    }
  }

  return formattedString + decimalPart;
}
