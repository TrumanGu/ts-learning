/*  简单枚举 */
{
    enum CardSuit {
        Clubs,
        Diamonds,
        Hearts,
        Spades
    }

    // 简单的使用枚举类型
    let Card = CardSuit.Clubs;

    // 类型安全
    Card = 'not a member of card suit'; // Error: string 不能赋值给 `CardSuit` 类型
}

/* 简单枚举结束 */

/*   字符串枚举开始  */
{
    enum EvidenceTypeEnum {
        UNKNOWN = '',
        PASSPORT_VISA = 'passport_visa',
        PASSPORT = 'passport',
        SIGHTED_STUDENT_CARD = 'sighted_tertiary_edu_id',
        SIGHTED_KEYPASS_CARD = 'sighted_keypass_card',
        SIGHTED_PROOF_OF_AGE_CARD = 'sighted_proof_of_age_card'
    }

    let a = EvidenceTypeEnum.PASSPORT_VISA
    console.log(a)
    // 字符串枚举更有实用意义
}

/*   字符串枚举结束  */


/**  常量枚举开始 */
{
    const enum Tristate {
        False,
        True,
        Unknown
    }

    const lie = Tristate.False;
    // 编译结束会变成 var lie = 0; 内联属于性能提升
}

/**  常量枚举结束 */



/**  有静态方法的枚举开始 */

enum Weekday {
    Monday,
    Tuseday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

namespace Weekday {
    export function isBusinessDay(day: Weekday) {
        switch (day) {
            case Weekday.Saturday:
            case Weekday.Sunday:
                return false;
            default:
                return true;
        }
    }
}

const mon = Weekday.Monday;
const sun = Weekday.Sunday;

console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun));

/**  有静态方法的枚举结束 */

