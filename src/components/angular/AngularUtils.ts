export class AngularUtils {
  generateClassName(name: string, suffix?: string): string {
    const INDEX_0 = 0;
    const DASH = '-';
    const types = {
      CHARACTER: 'CHARACTER',
      DASH: 'DASH'
    };
    const SUFFIX = suffix || 'Component';
    let SPACELOOP = false;

    return (
      name
        .split('')
        .map(
          item =>
            item !== DASH
              ? {
                  type: types.CHARACTER,
                  value: item
                }
              : {
                  type: types.DASH,
                  value: item
                }
        )
        .map((character, index) => {
          if (index === INDEX_0) {
            return character.value.toUpperCase();
          }
          if (character.type === types.DASH) {
            SPACELOOP = true;
            return;
          }

          if (character.type === types.CHARACTER && SPACELOOP) {
            SPACELOOP = false;
            return character.value.toUpperCase();
          }

          return character.value;
        })
        .join('') + SUFFIX
    );
  }
}
