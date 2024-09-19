

export default class Cursor{
    constructor(){
        this.init()
    }



    init(){
        const cursor = document.querySelector('.cursor')

        document.addEventListener('mousemove', (e) => {


            cursor.style.top = e.pageY + 'px';
            cursor.style.left = e.pageX + 'px';
        })

        const links = document.getElementsByTagName('a')

        for (let i = 0; i < links.length; i++) {
            const link = links[i];

            link.addEventListener('mouseover' , (e) => {

                console.log('ouii')
                cursor.classList.add('cursor-hover');
            });

            link.addEventListener('mouseout' , (e) => {

                
                cursor.classList.remove('cursor-hover');
            });
            
        }

         
    
        
        
    }
}