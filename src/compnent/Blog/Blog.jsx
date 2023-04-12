import React from 'react';

const Blog = () => {
    return (
        <div className='w-4/5 m-40 border-2 mx-auto p-2 rounded-md'>
            <div className='bg-purple-200 p-4 rounded-md m-4'>
                <h1 className='font-bold text-2xl my-4'>1. Context API কখন ব্যাবহার করা হয় ?</h1>
                <p>রিঅ্যাক্ট এর Context API  একদম টপ লেভেলে একটা স্ট্যাট তৈরী করে। এবং আপনি পরে চাইলে যেকোনো চাইল্ড কম্পোনেন্টই সেই ডাটা অ্যাক্সেস করতে পারবেন, পেরেন্ট কম্পোনেন্টকে কোনোরকম বিরক্ত না করেই। এবং এটা অনেক সিম্পল। রিডাক্সের মতো এতো ঝামেলাপূর্ণ না, তবে রিডাক্স কিছু কাজের জন্য স্পেশাল, তাই এই API রিডাক্স এর পরিপূরক নয়, মনে রাখবেন এটা রিডাক্সকে রিপ্লেস করতে পারবে না। তবে আমরা বেশীরভাগ ক্ষেত্রে রিডাক্স যে কাজে ইউজ করি সেগুলোর সমাধান দিতে পারবে হয়তো
</p>
            </div>
            <div className='bg-purple-200 p-4 rounded-md m-4'>
                <h1 className='font-bold text-2xl my-4'>1. What is custom hooks ?</h1>
                <p>কাস্টম রিঅ্যাক্ট জেএস হুক হল পুনঃব্যবহারযোগ্য ফাংশন যা একজন রিঅ্যাক্ট জেএস সফটওয়্যার ডেভেলপার রিঅ্যাক্ট অ্যাপ্লিকেশনে বিশেষ এবং অনন্য কার্যকারিতা যোগ করতে ব্যবহার করতে পারেন।  সাধারণত, যদি একটি বৈশিষ্ট্য যোগ করার প্রয়োজন হয়, কেউ একটি তৃতীয় পক্ষের লাইব্রেরি ইনস্টল করতে এবং সমস্যার সমাধান করতে পারে।  কিন্তু যদি এমন কোন লাইব্রেরি না থাকে যেখানে হুক ব্যবহার করা যায়?  এই সমস্যাটি কাস্টম রিঅ্যাক্ট জেএস হুক ব্যবহার করে সমাধান করা হয়।

</p>
            </div>
            <div className='bg-purple-200 p-4 rounded-md m-4'>
                <h1 className='font-bold text-2xl my-4'>1. What is useRef ?</h1>
                <p>UseRef Hook হল একটি ফাংশন যা একটি পরিবর্তনযোগ্য রেফ অবজেক্ট প্রদান করে যার বর্তমান প্রপার্টিটি পাস করা আর্গুমেন্ট (প্রাথমিক মান) দিয়ে আরম্ভ করা হয়।  প্রত্যাবর্তিত বস্তুটি উপাদানটির পুরো জীবনকাল ধরে থাকবে 


</p>
            </div>
            <div className='bg-purple-200 p-4 rounded-md m-4'>
                <h1 className='font-bold text-2xl my-4'>1. What is useMemo ?</h1>
                <p>useMemo হল একটি হুক, তাই আপনি এটিকে শুধুমাত্র আপনার কম্পোনেন্ট বা আপনার নিজের হুকগুলির শীর্ষ স্তরে কল করতে পারেন।  আপনি এটিকে লুপ বা শর্তের ভিতরে কল করতে পারবেন না।  আপনার যদি এটির প্রয়োজন হয়, একটি নতুন উপাদান বের করুন এবং রাজ্যটিকে এতে স্থানান্তর করুন।



</p>
            </div>
        </div>
    );
};

export default Blog;