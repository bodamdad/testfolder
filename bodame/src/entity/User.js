const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User", // 클래스 이름
  tableName: "user", // 실제 데이터베이스의 테이블 이름
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    githubId: {
      type: "varchar",
      unique: true
    },
    name: {
      type: "varchar"
    },
    email: {
      type: "varchar"
    }
    // 기타 필요한 컬럼들...
  }
});
