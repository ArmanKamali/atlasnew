export const persianMonth = [
    { id: 1, name: 'farvarding', perName: 'فروردین' },
    { id: 2, name: 'ordibehesht', perName: 'اردیبهشت' },
    { id: 3, name: 'khordad', perName: 'خرداد' },
    { id: 4, name: 'tir', perName: 'تیر' },
    { id: 5, name: 'mordad', perName: 'مرداد' },
    { id: 6, name: 'shahrivar', perName: 'شهریور' },
    { id: 7, name: 'mehr', perName: 'مهر' },
    { id: 8, name: 'aban', perName: 'آبان' },
    { id: 9, name: 'azar', perName: 'آذر' },
    { id: 10, name: 'dey', perName: 'دی' },
    { id: 11, name: 'bahman', perName: 'بهمن' },
    { id: 12, name: 'esfand', perName: 'اسفند' },
]

export const findPersianMonth = (month) => {
    let res = persianMonth.filter(m => m.id === month ? m : null)[0]
    return res.perName
}