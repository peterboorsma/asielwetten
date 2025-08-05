<?php

return [
    'defaultProfile' => 'standard',
    
    'fieldProfiles' => [
        'standard' => [
            'title' => ['seoTitle', 'title'],
            'description' => ['seoDescription', 'headerText', 'intro', 'richtext', 'body'],
            'image' => ['seoImage', 'image']
        ]
    ],
];