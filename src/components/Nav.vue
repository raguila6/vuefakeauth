<template>
     <div class="bg-blue-700 text-yellow-300">
          <div class="container mx-auto flex items-center justify-between bg-gray-400">
            <h1 class=" tracking-tight text-2xl font-medium">Basic
               <span class="font-normal">Router</span>
                   
            </h1>
            <nav>
                <ul class="flex space-x-4">
                    <li class="bg-green-900 py-6 px-8 hover:cursor-pointer hover:bg-blue-50 hover:text-indigo-600">
                        <router-link to="/">Home</router-link>
                    </li>

                    <li class="bg-green-900 py-6 px-8 hover:cursor-pointer hover:bg-blue-50 hover:text-indigo-600">
                        <router-link to="./About">About</router-link>   
                    </li>

                    <li class="bg-green-900 py-6 px-8 hover:cursor-pointer hover:bg-blue-50 hover:text-indigo-600">
                    <router-link to="./Hello">Hello</router-link>
                    </li>
                </ul>
            </nav>
        </div>
     </div>
</template>