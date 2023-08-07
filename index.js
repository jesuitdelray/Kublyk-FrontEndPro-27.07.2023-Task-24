class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName
        this.lastName = lastName
        this.birthYear = birthYear
        this.grades = []
        this.attendance = new Array(25).fill(null)
    }

    markPresent() {
        const index = this.attendance.indexOf(null)
        if (index !== -1) {
            this.attendance[index] = true
            return true
        } else {
            return false
        }
    }

    markAbsent() {
        const index = this.attendance.indexOf(null)
        if (index !== -1) {
            this.attendance[index] = false
            return true
        } else {
            return false
        }
    }

    getAge() {
        const currentYear = new Date().getFullYear()
        return currentYear - this.birthYear
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return null
        }
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0)
        return sum / this.grades.length
    }

    getSummary() {
        const avgGrade = this.getAverageGrade()
        const avgAttendance =
            this.attendance.filter(status => status === true).length / this.attendance.length

        if (avgGrade !== null && avgAttendance !== null) {
            if (avgGrade > 90 && avgAttendance > 0.9) {
                return "Молодець!"
            } else if (avgGrade > 90 || avgAttendance > 0.9) {
                return "Добре, але можна краще"
            } else {
                return "Редиска!"
            }
        } else {
            return "Студент ще не має оцінок або відвідуваності"
        }
    }
}

// Приклад використання
const student1 = new Student("Іван", "Петров", 2001)
student1.grades = [85, 90, 95, 88]
student1.markPresent()
student1.markPresent()
student1.markPresent()

const student2 = new Student("Марія", "Іванова", 2002)
student2.grades = [95, 92, 88, 98]
student2.markPresent()
student2.markAbsent()
student2.markPresent()

const student3 = new Student("Петро", "Сидоров", 2000)
student3.grades = [80, 85, 75, 78]
student3.markAbsent()
student3.markAbsent()
student3.markPresent()

console.log(`${student1.firstName} ${student1.lastName}:`)
console.log(`Вік: ${student1.getAge()}`)
console.log(`Середній бал: ${student1.getAverageGrade()}`)
console.log(`Відвідування: ${student1.attendance}`)
console.log(`Summary: ${student1.getSummary()}`)
console.log()

console.log(`${student2.firstName} ${student2.lastName}:`)
console.log(`Вік: ${student2.getAge()}`)
console.log(`Середній бал: ${student2.getAverageGrade()}`)
console.log(`Відвідування: ${student2.attendance}`)
console.log(`Summary: ${student2.getSummary()}`)
console.log()

console.log(`${student3.firstName} ${student3.lastName}:`)
console.log(`Вік: ${student3.getAge()}`)
console.log(`Середній бал: ${student3.getAverageGrade()}`)
console.log(`Відвідування: ${student3.attendance}`)
console.log(`Summary: ${student3.getSummary()}`)
