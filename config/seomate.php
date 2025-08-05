<?php

return [
    'defaultProfile' => 'standard',
    
    'fieldProfiles' => [
        'standard' => [
            'title' => ['seoTitle', 'title'],
            'description' => ['seoDescription', 'intro', 'richtext', 'body'],
            'image' => ['seoImage', 'image']
        ]
    ],
];