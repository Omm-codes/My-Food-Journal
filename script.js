@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
:root{
    --tenne-tawny: #d65108;
    --tenne-tawny-dark: #b54507;
}
body{
    font-weight: 300;
    font-size: 1.05rem;
    line-height: 1.6;
    font-family: 'Poppins', sans-serif;
    background: url('Images/image-1729364972759.jpg') no-repeat center center fixed;
    background-size: cover;
    color: #000;
}

/* General Buttons and Text */
.btn{
    font-family: inherit;
    cursor: pointer;
    outline: 0;
    font-size: 1.05rem;
}
.text{
    opacity: 0.8;
}
.title{
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #000;
}

/* Containers and Sections */
.container{
    min-height: 100vh;
}
.meal-wrapper{
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.9);  /* Slightly opaque white background */
    text-align: center;
    border-radius: 1rem;
    box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.15);  /* Softer shadow */
    color: #000;  /* Ensure text inside the wrapper is black */
}
.meal-search{
    margin: 2rem 0;
}
.meal-search cite{
    font-size: 1rem;
}
.meal-search-box{
    margin: 1.2rem 0;
    display: flex;
    gap: 10px;
    align-items: stretch;
}
.search-control,
.search-btn{
    width: 20%;
}
.search-control{
    padding: 0 1rem;
    font-size: 1.1rem;
    font-family: inherit;
    outline: 0;
    border: 1px solid var(--tenne-tawny);
    color: var(--tenne-tawny);
    border-radius: 2rem;
    width: 60%;
}
.search-control::placeholder{
    color: var(--tenne-tawny);
}
.search-btn{
    height: 55px;
    font-size: 1.8rem;
    background: var(--tenne-tawny);
    color: #fff;
    border: none;
    border-radius: 2rem;
    transition: all 0.4s linear;
}
.search-btn:hover{
    background: var(--tenne-tawny-dark);
}

/* Meal Results */
.meal-result{
    margin-top: 4rem;
}
#meal{
    margin: 2.4rem 0;
}
.meal-item{
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.15);
    margin: 2rem 0;
    background: #fff;
}
.meal-img img{
    width: 100%;
    display: block;
}
.meal-name{
    padding: 1.5rem 0.5rem;
}
.meal-name h3{
    font-size: 1.4rem;
    color: #000;
}
.recipe-btn{
    text-decoration: none;
    color: #fff;
    background: var(--tenne-tawny);
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0.75rem 0;
    display: block;
    width: 175px;
    margin: 1rem auto;
    border-radius: 2rem;
    transition: all 0.4s linear;
}
.recipe-btn:hover{
    background: var(--tenne-tawny-dark);
}

/* Meal Details */
.meal-details{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
    background: #fff;
    border-radius: 1rem;
    width: 90%;
    height: 90%;
    overflow-y: scroll;
    display: none;
    padding: 2rem 0;
}
.meal-details::-webkit-scrollbar{
    width: 10px;
}
.meal-details::-webkit-scrollbar-thumb{
    background: #f0f0f0;
    border-radius: 2rem;
}

/* JS Related */
.showRecipe{
    display: block;
}

.meal-details-content{
    margin: 2rem;
}
.meal-details-content p:not(.recipe-category){
    padding: 1rem 0;
}
.recipe-close-btn{
    position: absolute;
    right: 2rem;
    top: 2rem;
    font-size: 1.8rem;
    background: #fff;
    border: none;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
}
.recipe-title{
    letter-spacing: 1px;
    padding-bottom: 1rem;
    color: #000;
}
.recipe-category{
    background: #fff;
    font-weight: 600;
    color: var(--tenne-tawny);
    display: inline-block;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;
}
.recipe-instruct{
    padding: 1rem 0;
}
.recipe-meal-img img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
}
.recipe-link{
    margin: 1.4rem 0;
}
.recipe-link a{
    color: #000;
    font-size: 1.2rem;
    font-weight: 700;
    transition: all 0.4s linear;
}
.recipe-link a:hover{
    opacity: 0.8;
}

/* Not Found */
.notFound{
    grid-template-columns: 1fr!important;
    color: var(--tenne-tawny);
    font-size: 1.8rem;
    font-weight: 600;
    width: 100%;
}

/* Media Queries */
@media screen and (min-width: 600px){
    .meal-search-box{
        width: 540px;
        margin-left: auto;
        margin-right: auto;
    }
}

@media screen and (min-width: 768px){
    #meal{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
    .meal-item{
        margin: 0;
    }
    .meal-details{
        width: 700px;
    }
}

@media screen and (min-width: 992px){
    #meal{
        grid-template-columns: repeat(3, 1fr);
    }
}
