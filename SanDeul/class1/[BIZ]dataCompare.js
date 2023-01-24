// 기존 데이터 A를 신규 데이터 B와 Compare 후 데이터 merge 작업을 수행하려 한다.
// A에서 추가, 변경, 삭제 된 데이터를 구하시오.
// (다른 사람 도움 없이 혼자 힘으로 해결해 보세요. 질문사절 ^^)

const A = [
  {
    id: "1",
    area: "419A1",
    line: "5062",
    pjtNo: "SO6625",
    book: "40620S",
    date: "2023-01-01 23:12:12",
  },
  {
    id: "2",
    area: "419A1",
    line: "5062",
    pjtNo: "SO6625",
    book: "40620S",
    date: "2023-01-01 23:12:13",
  },
  {
    id: "3",
    area: "419A1",
    line: "5064",
    pjtNo: "SO6625",
    book: "40620L",
    date: "2023-01-01 23:12:14",
  },
  {
    id: "4",
    area: "419A1",
    line: "5065",
    pjtNo: "SO6625",
    book: "40620S",
    date: "2023-01-01 23:12:15",
  },
  {
    id: "5",
    area: "419A1",
    line: "5066",
    pjtNo: "SO6625",
    book: "40620S",
    date: "2023-01-01 23:12:16",
  },
  {
    id: "6",
    area: "419A1",
    line: "5067",
    pjtNo: "SO6626",
    book: "40620A",
    date: "2023-01-01 23:12:17",
  },
  {
    id: "7",
    area: "419A1",
    line: "5068",
    pjtNo: "SO6626",
    book: "40620A",
    date: "2023-01-01 23:12:18",
  },
  {
    id: "8",
    area: "419A1",
    line: "5069",
    pjtNo: "SO6626",
    book: "40620B",
    date: "2023-01-01 23:12:19",
  },
  {
    id: "9",
    area: "419A1",
    line: "5069",
    pjtNo: "SO6626",
    book: "40620C",
    date: "2023-01-01 23:12:20",
  },
  {
    id: "10",
    area: "419A1",
    line: "5071",
    pjtNo: "SO6626",
    book: "40620D",
    date: "2023-01-01 23:12:21",
  },
];

const B = [
  { area: "419A1", line: "5061", pjtNo: "SO6625", book: "40620S" },
  { area: "419C1", line: "5065", pjtNo: "SO6625", book: "40620S" },
  { area: "419C1", line: "5066", pjtNo: "SO6625", book: "40620S" },
  { area: "419A1", line: "5067", pjtNo: "SO6626", book: "40620A" },
  { area: "419A1", line: "5068", pjtNo: "SO6626", book: "40620A" },
  { area: "419A1", line: "5069", pjtNo: "SO6627", book: "40620B" },
  { area: "419A1", line: "5069", pjtNo: "SO6628", book: "40620C" },
  { area: "419D1", line: "5072", pjtNo: "SO6628", book: "40620C" },
];

/* 풀이 */

// compare 및 merge 라는 조건을 제 임의대로 해석해 본 결과,
// update랑 비슷하다고 느껴져서 나름의 기준을 세우고 풀어보았습니다.

// 우선 B의 area, line, pjtNo, book을 모두 key 값으로 보고, key 값이 모두 같은 데이터는 변경 데이터라고 판단했습니다.
// (이를테면 date 같은 경우는 key 안에 포함되지 않았으니, Compare시 변경 되었을 가능성이 있다고 생각했습니다.)

// 변경된 데이터에 포함되지 않았으며, B에 기재되어있는 데이터는 key값이 다르므로 A에 추가될 데이터라고 판단했습니다.

// 그리고 변경된 데이터에 포함되지 않았고, 추가된 데이터와도 다른 나머지 A의 데이터들은 모두 삭제 데이터로 판단했습니다.

const addedData = [];
const changedData = [];
const deletedData = [];

const notAddBdata = [];

for (let i = 0; i < A.length; i++) {
  for (let j = 0; j < B.length; j++) {
    if (
      A[i].area === B[j].area &&
      A[i].line === B[j].line &&
      A[i].pjtNo === B[j].pjtNo &&
      A[i].book === B[j].book
    ) {
      changedData.push(A[i]);
      notAddBdata.push(B[j]);
    }
  }
}

for (let k = 0; k < B.length; k++) {
  if (!notAddBdata.find((e) => B[k] === e)) {
    addedData.push(B[k]);
  }
}

for (let l = 0; l < A.length; l++) {
  if (!changedData.find((e) => A[l] === e)) {
    deletedData.push(A[l]);
  }
}

console.log(addedData);
console.log(changedData);
console.log(deletedData);
