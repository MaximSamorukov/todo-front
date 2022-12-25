const dataTemplate = [
   {
     property: "Фамилия Имя Отчество:",
     type: 'fio',

   },
   {
     property: "Год рождения:",
     type: 'birthday',
   },
   {
     property: "Роль:",
     type: 'role',
   },
   {
     property: "Логин:",
     type: "login"
   },
   {
     property: "Пароль:",
     type: "password",
   }
 ]


export function createFio(user) {
   const { name = '_', surname = '_', lastname = '_' } = user;
   return `${surname} ${name} ${lastname}`;
}
export function createDataUser(user) {
   const data = dataTemplate.map((i) => {
      if (i.type === 'fio') {
         return {
            ...i,
            value: createFio(user),
         }
      } else {
         return {
            ...i,
            value: user[i.type],
         }
      }
   });
   return data;
}