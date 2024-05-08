
export const sleeper = async (seconds: number) => {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  })
}

export function onlyUnique<T>(value: T, index: number, array: T[]) {
  return array.indexOf(value) === index;
}

export function isHex(str) {
  const regexp = /^[0-9a-f]+$/;
  if (regexp.test(str)) {
    return true;
  }
  else {
    return false;
  }
}

export function decodeRuneId(
  runeId: string,
): {
  block: number;
  tx: number;
} {
  let arr = runeId.split(":");
  if (arr.length != 2) {
    throw 'invalid runid, runid must be blockNumber:txNumber format';
  }
  const block = parseInt(arr[0]);
  if (isNaN(block) || block < 0 ) {
    throw 'invalid runid blockNumber';
  }
  const tx = parseInt(arr[1]);
  if (isNaN(tx) || tx < 0 ) {
    throw 'invalid runid txNumber';
  }
  return {
    block,
    tx,
  };
}

