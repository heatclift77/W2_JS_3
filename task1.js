// task 1

const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay =['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Bukan Hari Kerja'))
            }
        }, 3000);
    })
}

// cekHariKerja('senin')
// .then(hari => {
//     console.log(hari + ' adalah hari kerja');
// })
// .catch(err => console.log(err.message));

// then catch adalah method untuk handle promise di javascript
// then catch merupakan proses asynchronus
// then merespon resolve dan cacth merespon reject, untuk kemudian diolah sesuai kebutuhan

// async function hariKerja (day) {
//     try{
//         let cek = await cekHariKerja(day);
//         console.log(cek + ' adalah hari kerja');
//     }catch{
//         console.log('bukan hari kerja');
//     }
// }
// hariKerja('day')

// async await adalah cara baru dari es 2017 untuk menghandle promise,
// berbeda dengan then catch, async await berbprilaku layaknya synchronus.