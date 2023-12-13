export const LUNCH = {
  START: '점심 메뉴 추천을 시작합니다.\n',
  INPUT_COACH: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  EXCEPT_MENU: '\n%s(이)가 못 먹는 메뉴를 입력해 주세요.\n',
  MENU: '\n메뉴 추천 결과입니다.',
  FINISH: '\n추천을 완료했습니다.',
};

export const PREFIX = '[ERROR]';

export const ERROR = {
  OUT_OF_RANGE: `${PREFIX} 코치 이름은 최소 2글자, 최대 4글자로 작성하세요.`,
  COACH_COUNT: `${PREFIX} 코치는 최소 2명 이상 입력해야 합니다.`,
  MENU_COUNT: `${PREFIX} 먹지 못하는 메뉴는 0~2개 까지 가능합니다.`,
  NOT_EXIST: `${PREFIX} 존재하지 않는 메뉴가 있습니다.`,
};
