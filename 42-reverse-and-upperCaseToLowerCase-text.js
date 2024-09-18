function func(str) {
  return str
    .split("")
    .reverse()
    .map(char => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("");
}

func("How are you?");
func("Who Are You?");

func("AaB"); // bAa

func("JaVaScRiPt FuN"); // nUf TpIrCsAvAj

func("CoDiNg Is CoOl"); // LoOc Si GnIdOc
