# curl -X POST 'http://localhost/v1/chat-messages' \
# --header 'Authorization: Bearer app-aG9EPsssJINJIza40RmGHqGc' \ 
# --header 'Content-Type: application/json' \
# --data-raw '{
#     "inputs": {},
#     "query": "What are the specs of the iPhone 13 Pro Max?",
#     "response_mode": "streaming",
#     "conversation_id": "",
#     "user": "abc-123",
#     "files": [
#       {
#         "type": "image",
#         "transfer_method": "remote_url",
#         "url": "https://cloud.dify.ai/logo/logo-site.png"
#       }
#     ]
# }'

# curl -X POST 'http://localhost/v1/chat-messages' \
# --header 'Authorization: Bearer app-aG9EPsssJINJIza40RmGHqGc' \
# --header 'Content-Type: application/json' \
# --data-raw '{
#     "inputs": {},
#     "query": "What are the specs of the iPhone 13 Pro Max?",
#     "response_mode": "blocking",
#     "conversation_id": "",
#     "user": "abc-123",
#     "files": [
#       {
#         "type": "image",
#         "transfer_method": "remote_url",
#         "url": "https://cloud.dify.ai/logo/logo-site.png"
#       }
#     ]
# }'
#--header 'Authorization: Bearer ' for deepresearch \


curl -X POST 'http://localhost/v1/completion-messages' \
--header 'Authorization: Bearer app-JyDBE3n5av3dOtwKMTRfmufd' \
--header 'Content-Type: application/json' \
--data-raw '{
    "inputs": {"query": "do you understand whats in this figure?"},
    "response_mode": "blocking",
    "user": "abc-123",
     "files": [
       {
         "type": "image",
         "transfer_method": "remote_url",
         "url": "https://cloud.dify.ai/logo/logo-site.png"
       }
    ]

}'
