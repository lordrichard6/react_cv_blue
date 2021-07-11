export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'url',
            options: {
              hotspot: true,
            },
          },
        {
            name: 'date',
            type: 'datetime',
        },
        {
            name: 'place',
            type: 'string',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'tech',
            type: 'string',
        },
        {
            name: 'projectType',
            title: 'Project type',
            type: 'string',
            options: {
                list: [
                    {value: 'personal', title: 'Personal'},
                    {value: 'client', title: 'Client'},
                    {value: 'tutorial', title: 'Tutorial'},
                ],    
            },
        },
        {
            name: 'projectLink',
            type: 'url',
        },
        {
            name: 'projectGithub',
            type: 'url',
        },
        {
            name: 'tags',
            type: 'array',
            of: [
                {
                    type: 'string',
                },
            ],
            option: {
                layout: 'tags'
            }
        }
    ]
}