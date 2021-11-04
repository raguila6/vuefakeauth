<template>
     <div class="text-yellow-300 bg-indigo-700">
          <div class="container flex items-center justify-between mx-auto">
            <h1 class="text-2xl font-medium tracking-tight ">
               Vue<span class="font-normal">FakeAuth</span>
                   
            </h1>
            <nav>
                <ul class="flex space-x-4">
                    <li class="px-8 py-6 bg-green-900 hover:cursor-pointer hover:bg-yellow-200 hover:text-indigo-600">
                        <router-link to="/">Home</router-link>
                    </li>

                    <li class="px-8 py-6 bg-green-900 hover:cursor-pointer hover:bg-yellow-200 hover:text-indigo-600">
                        <router-link to="./About">About</router-link>   
                    </li>

                    <li class="px-8 py-6 bg-green-900 hover:cursor-pointer hover:bg-yellow-200 hover:text-indigo-600">
                    <router-link to="./Login">Login</router-link>
                    </li>
                </ul>
            </nav>
        </div>
     </div>
</template>